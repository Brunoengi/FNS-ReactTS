import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import styles from './Main.module.scss'
import BasicPopover from 'components/BasicPopover';
import Menu from 'components/Menu';
import OutlinedCard from 'components/OutlinedCard';
import LineForm from 'components/LineForm';
import BasicSelect from 'components/BasicSelect';

export default function main() {

  const info = {
    Possiblefck: [20, 25, 30, 35, 40 , 45 ,50, 55, 60, 65, 70 ,75, 80, 85, 90]
    
  }

  return (
    <>
    <Menu/>
    <main>
      <div className={styles.card}>
        <p>Propriedades Geométricas</p>
        <div className={styles.lineForm}>
          <TextField
            size='small'
            label="b"
            id="width-section"
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
          />
          <BasicPopover
            label='?'
            text='Largura da viga retangular'
          />
        </div>

        <div className={styles.lineForm}>
          <TextField
            size='small'
            label="h"
            id="height-section"
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
          />
          <BasicPopover
            label='?'
            text='Altura da viga retangular'
          />
        </div>

        <div className={styles.lineForm}>
          <TextField
            size='small'
            label="d"
            id="uselfull-heigth-section"
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
          />
          <BasicPopover
            label='?'
            text='"Altura útil da viga retangular, distância da borda mais comprimida ao centroide da armadura. H – (cobrimento + diâmetro da armadura transversal/estribos + metade do diâmetro da armadura longitudinal)"'
          />
        </div>
      </div>

      <div className={styles.card}>
        <p>Propriedades dos Materiais</p>
        <div className={styles.lineForm}>
          <TextField
            size='small'
            label={<div>f<sub>ck</sub></div>}
            id="fck"
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">MPa</InputAdornment>,
            }}
          />
          <BasicPopover
            label='?'
            text='Resistência caracterísitca a compressão do concreto'
          />
        </div>

        <div className={styles.lineForm}>
          <TextField
            size='small'
            label={<div>f<sub>yk</sub></div>}
            id="fyk"
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">MPa</InputAdornment>,
            }}
          />
          <BasicPopover
            label='?'
            text='Um texto de teste'
          />
        </div>

        <div className={styles.lineForm}>
          <TextField
            size='small'
            label='E'
            id='E'
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">GPa</InputAdornment>,
            }}
          />
          <BasicPopover
            label='?'
            text='Tensão de escoamento característica do aço'
          />
        </div>

      </div>

      <div className={styles.card}>
        <p>Coef. Parciais de Segurança</p>
        <div className={styles.lineForm}>
          <TextField
            size='small'
            label={<div>{String.fromCharCode(968)}<sub>c</sub></div>}
            id='qsic'
            sx={{ m: 1, width: '15ch' }}
          />
          <BasicPopover
            label='?'
            text='Coeficiente Parcial de Segurança para o concreto'
          />
        </div>

        <div className={styles.lineForm}>
          <TextField
            size='small'
            label={<div>{String.fromCharCode(968)}<sub>s</sub></div>}
            id="qsis"
            sx={{ m: 1, width: '15ch' }}
          />
          <BasicPopover
            label='?'
            text='Coeficiente Parcial de Segurança para o aço'
          />
        </div>
        <div className={styles.lineForm}>
          <TextField
            size='small'
            label={<div>{String.fromCharCode(968)}<sub>f</sub></div>}
            id="qsif"
            sx={{ m: 1, width: '15ch' }}
          />
          <BasicPopover
            label='?'
            text='Coeficiente Parcial de Segurança para o momento'
          />
        </div>
      </div>

      <div className={styles.card}>
        <p>Esforços</p>
        <div className={styles.lineForm}>
          <TextField
            size='small'
            label={<div>M.F.S.</div>}
            id="qsic"
            sx={{ m: 1, width: '15ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">kNm</InputAdornment>,
            }}
          />
          <BasicPopover
            label='?'
            text='Um texto de teste'
          />
        </div>

        <div className={styles.lineForm}>
          <TextField
            size='small'
            label={<div>Coef. Beta</div>}
            id="qsis"
            sx={{ m: 1, width: '15ch' }}
          />
          <BasicPopover
            label='?'
            text='Um texto de teste'
          />
        </div>
      </div>
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
            labelText='h'
            id='uselfull-heigth-section'
            textPopOver='Altura útil da viga retangular, distância da borda mais comprimida ao centroide da armadura. H – (cobrimento + diâmetro da armadura transversal/estribos + metade do diâmetro da armadura longitudinal)'
          />
          <BasicSelect
            dataset={info.Possiblefck}
          />
          
        </>
      </OutlinedCard>

    </main>
    </>
  )
}