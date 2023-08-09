import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import styles from './Main.module.scss'
import BasicPopover from 'components/BasicPopover';
import Menu from 'components/Menu';
import OutlinedCard from 'components/OutlinedCard';
import LineForm from 'components/LineForm';

export default function main() {

  const info = {
    Possiblefck: [20, 25, 30, 35, 40, 45 ,50, 55, 60, 65, 70 ,75, 80, 85, 90],
    Possiblefyk: ['500 (CA-50)', '600 (CA-60)'],
    PossibleE: [190, 200, 210]
  }

  return (
    <>
    <Menu/>
    <main className={styles.main}>
      <OutlinedCard
        title='Propriedades Geométricas'
      >
        <>
          <LineForm
            unit='cm'
            labelText='b'
            id='width-section'
            textPopOver='Largura da viga retangular'
            
          />
          <LineForm
            unit='cm'
            labelText='h'
            id='height-section'
            textPopOver='Altura da viga retangular'
          />
            <LineForm
            unit='cm'
            labelText='d'
            id='uselfull-heigth-section'
            textPopOver='Altura útil da viga retangular, distância da borda mais comprimida ao centroide da armadura. H – (cobrimento + diâmetro da armadura transversal/estribos + metade do diâmetro da armadura longitudinal)'
          />
          
        </>
      </OutlinedCard>

      <OutlinedCard
        title='Propriedades dos Materiais'
      >
        <div> 
          <LineForm
            dataset={info.Possiblefck}
            context={<div>f<sub>ck</sub></div>}
            labelSelect={'fck'}
            endText='MPa'
            type='select'
            textPopOver='Tensão caracterísitica do concreto'
          />
          <LineForm
            dataset={info.Possiblefyk}
            context={<div>f<sub>yk</sub></div>}
            labelSelect={'fyk'}
            endText='MPa'
            type='select'
            textPopOver='Tensão caracterísitica do aço'
          />
          <LineForm
             dataset={info.PossibleE}
             context={<div>E</div>}
             labelSelect={'E'}
             endText='GPa'
             type='select'
             textPopOver='Módulo de elasticidade do aço'
          />
          
        </div>
      </OutlinedCard>

      <OutlinedCard
        title='Coeficientes Parciais de Segurança'
      >
        <div> 
          <LineForm
            labelText={<div>{String.fromCharCode(968)}<sub>c</sub></div>}
            id='qsic'
            textPopOver='Coeficiente Parcial de Segurança para o concreto'
          />         
          <LineForm
            labelText={<div>{String.fromCharCode(968)}<sub>s</sub></div>}
            id='qsis'
            textPopOver='Coeficiente Parcial de Segurança para o aço'
          /> 
          <LineForm
            labelText={<div>{String.fromCharCode(968)}<sub>f</sub></div>}
            id='qsif'
            textPopOver='Coeficiente Parcial de Segurança para o momento'
          />  
        </div>
      </OutlinedCard>

    </main>
    </>
  )
}