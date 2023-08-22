import { useContext } from "react";
import IFormValues from "types/context/IFormValues";

export default function dimension(inputsValue: IFormValues) {

  let { b, h, d, fck, fyk, E, qsic, qsis, qsif, serviceBendingMoment, beta } = inputsValue
  let { alamb, alfac, eu, qlim } = typeConcreteVariables(fck, beta)
  
  // Unit conversion: converting to kN and cm
  serviceBendingMoment = 100 * serviceBendingMoment;
  fck = fck / 10;
  fyk = fyk / 10;
  E = 100 * E;

  // Calculation resistors
  let fcd = fck / qsic;
  let tcd = alfac * fcd;
  let fyd = fyk / qsis;
  let amd = qsif * serviceBendingMoment;

  // Geometric parameter
  let delta = (h - d) / d;

  // Limit moment
  let amilim = alamb * qlim * (1 - 0.5 * alamb * qlim);

  // Requesting reduced moment
  let ami = amd / (b * d * d * tcd);

  //Checking single or double steel
  if (ami <= amilim) {
    // Single steel
    var qsi = (1 - Math.sqrt(1 - 2 * ami)) / alamb;
    var aas = (alamb * qsi * b * d * tcd) / fyd;
    var asl = 0;

  } else {
    // Double steel
    var qsia = eu / (eu + 10);

    // Compression steel deformation
    var esl = (eu * (qlim - delta)) / qlim;
    esl = esl / 1000;
    var ess = Math.abs(esl);
    var eyd = fyd / E;
    
    //Stress calculation in steel
    var tsl
    
    if (ess < eyd) {
      tsl = E * ess;
    } else {
      tsl = fyd;
    }
    if (esl < 0) {
      tsl = -tsl;
    }

    // Calculation of steel areas when double steel
    var asl = ((ami - amilim) * b * d * tcd) / ((1 - delta) * tsl);
    var aas = ((alamb * qlim + (ami - amilim) / (1 - delta)) * b * d * tcd) / fyd;
  }

  // Minimal steel
  var romin, asmin
  var a = 2 / 3;
  fck = 10 * fck;
  fyd = 10 * fyd;
  if (fck <= 50) {
    romin = (0.078 * fck ** a) / fyd;
  } else {
    romin = (0.5512 * Math.log10(1 + 0.11 * fck)) / fyd;
  }
  if (romin < 0.0015) {
    romin = 0.0015;
  }
  asmin = romin * b * h;
  if (aas < asmin) {
    aas = asmin;
  }

  // Tensioned steel area and compressed steel area
 let ast = Number(aas.toFixed(2))
 let asc = Number(asl.toFixed(2))


  // Second stage: Deformations

  //calculation of qsi
  if (ami > amilim) {
    qsi = (1 - Math.sqrt(1 - 2 * amilim)) / alamb;
  } else {
    qsi = (1 - Math.sqrt(1 - 2 * ami)) / alamb;
  }

  //Neutral line
  let xa = qsi * d;


  //Concrete: Type I
  let eo

  if (fck <= 50) {
    eu = 3.5 / 1000
    eo = 0.002
  } else {
    eu = (2.6 + 35 * ((90 - fck) / 100) ** 4) / 1000
    eo = ((2 + 0.085 * ((fck - 50) ** 0.53))) / 1000
  }

  //Check if the neutral line position is above the limit allowed by NBR 6118
  let xlim, dominio, ruptura, eps, epc, eoaco

  if (fck <= 50) {
    xlim = 0.45 * d;
  } else {
    xlim = 0.35 * d;
  }

  if (xa > xlim) {
    dominio = "3";
    ruptura = " A ruptura acontece no concreto";
    xa = xlim;
    eps = (eu * ((d - xa) / xa));
    epc = eu;
  }
  else {
    dominio = "2";
    ruptura = "A ruptura acontece no aço";
    eps = 10 / 1000;
    epc = (0.01 * xa) / (d - xa);
    if (epc > eu) {
      dominio = "3";
      epc = eu;
      ruptura = " A ruptura acontece no concreto";
      eps = (eu * ((d - xa) / xa));
    }
  }

  //Converting kN/cm² to MPa
  fyk = 10 * fyk

  if (fyk === 500) {
    eoaco = 2.07 / 1000;
  } else if (fyk === 600) {
    eoaco = 2.48 / 1000;
  } else {
    console.log("Não foi utilizado aço CA-50 nem CA-60, o aço utilizado foi: " + fyk)
  }

  //Resulting from traction
  let resTracion = aas * fyd / 10; //Divide por 10 para deixar em kN

  console.log(alamb, alfac, eu, qlim, serviceBendingMoment, fck, fyk, E, fcd, tcd, fyd, amd, delta, amilim, ami, asl, aas, a, romin, asmin, ast)

  return {
    alamb, alfac, eu, qlim, serviceBendingMoment, fck, fyk, E, fcd, tcd, fyd, amd, delta, amilim, ami, asl, aas, a, romin, asmin, ast
  }

}

function typeConcreteVariables(fck: number, beta: number) {
  
  let alamb, alfac, eu, qlim

  if (fck <= 50) {
    alamb = 0.8;
    alfac = 0.85;
    eu = 3.5;
    qlim = 0.8 * beta - 0.35;
  } else {
    alamb = 0.8 - (fck - 50) / 400;
    alfac = 0.85 * (1 - (fck - 50) / 200);
    eu = 2.6 + 35 * ((90 - fck) / 100) ** 4;
    qlim = 0.8 * beta - 0.45;
  }

  return {
    alamb, alfac, eu, qlim
  }

}

