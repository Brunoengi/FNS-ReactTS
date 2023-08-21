import styles from './Main.module.scss'
import Menu from 'components/Menu';
import OutlinedCard from 'components/OutlinedCard';
import LineForm from 'components/LineForm';
import { LineChart } from 'components/LineChart';
import BasicButton from 'components/BasicButton';
import { MainFormProvider } from 'context/MainFormContext';


export default function Main() {

  const info = {
    Possiblefck: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], //MPa
    Possiblefyk: [{
      textLabel: '500 (CA-50)',
      value: 500
    },
    {
      textLabel: '600 (CA-50)',
      value: 600
    }], //MPa
    PossibleE: [190, 200, 210] //GPa
  }

  return (
    <>

      <MainFormProvider>
        <Menu />
        <div className={styles.painel}>
          <div className={styles.inputsContainer}>
            <OutlinedCard
              title='Propriedades Geométricas'
            >
              <>
                <LineForm
                  unit='cm'
                  labelText='b'
                  id='b'
                  textPopOver='Largura da viga retangular'

                />
                <LineForm
                  unit='cm'
                  labelText='h'
                  id='h'
                  textPopOver='Altura da viga retangular'
                />
                <LineForm
                  unit='cm'
                  labelText='d'
                  id='d'
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
                  id='fck'
                />
                <LineForm
                  dataset={info.Possiblefyk}
                  context={<div>f<sub>yk</sub></div>}
                  labelSelect={'fyk'}
                  endText='MPa'
                  type='select'
                  textPopOver='Tensão de escoamento caracterísitica do aço'
                  id='fyk'
                />
                <LineForm
                  dataset={info.PossibleE}
                  context={<div>E</div>}
                  labelSelect={'E'}
                  endText='GPa'
                  type='select'
                  textPopOver='Módulo de elasticidade do aço'
                  id='E'
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

            <OutlinedCard
              title='Esforços'
            >
              <>
                <LineForm
                  unit='kNm'
                  labelText='M.F.S.'
                  id='serviceBendingMoment'
                  textPopOver='Momento Fletor de Serviço'

                />
                <LineForm
                  labelText='Coef.Beta'
                  id='beta'
                  textPopOver='Coeficiente beta de redistribuição dos momentos'
                />

              </>
            </OutlinedCard>
          </div>
          <div className={styles.calculateButton}>
            <BasicButton
              text='Calcular'
              variant='outlined'
            />
          </div>
        </div>


        <div className={styles.canvasContainer}>
          <LineChart />
          <LineChart />
          <LineChart />
        </div>
      </MainFormProvider>
    </>
  )
}