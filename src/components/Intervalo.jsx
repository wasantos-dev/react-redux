import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
import { alteraNumeroMinimo, alteraNumeroMaximo } from '../store/actions/numeros'

import Card from './Card'

const Intervalo = props => {
  const {min, max} = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input type="number" value={min} onChange={e =>   props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input type="number" value={max} onChange={e =>   props.alterarMaximo(+e.target.value)} />
        </span>
      </div>
    </Card>
  )
}
const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

const mapDispatchToProps = dispatch => {
  return {
    alterarMinimo(novoNumero) {
      const action = alteraNumeroMinimo(novoNumero)
      dispatch(action)
    },
    alterarMaximo(novoNumero) {
      const action = alteraNumeroMaximo(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)