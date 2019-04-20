import React, { Component } from 'react'
import './App.css'
import '../ResultDisplay/ResultDisplay'
import ResultDisplay from '../ResultDisplay/ResultDisplay'
import Formula from '../Formula/Formula'
import Buttons from '../Buttons/Buttons'
import Footer from '../Footer/Footer'

class App extends Component {

  state = {
    formula: '0',
    result: null
  }

  handleButtonClick = (event) => {
    const calcValue = event.target.value
    switch (calcValue) {
      case 'AC':
        this.setState({
          formula: '0',
          result: null
        })
      break
      case 'equal':
        this.handleResult()
      break
      case 'x':
        this.removeLast()  
      break
      default:
      this.setState({
        formula: this.validateFormula(calcValue)
      })
      break
    }
  }

  validateFormula = (value) => {
    const { formula } = this.state
    switch (value) {
      case '0':
        return formula !== '0' ? formula + value : '0'
      case '.':
        return formula[formula.length - 1] === value ? formula : formula + value
      default:
        return formula === '0' ?  value : formula + value
    } 
  }

  handleResult = () => {
    const formula = this.state.formula
    function checkEval(formula) {
      let result = ''
      try {
        eval(formula)
        result = eval(formula) 
      } catch (error) {
        if (error instanceof SyntaxError) {
          result = 'Syntax Error!'
        } else if (error instanceof ReferenceError) {
          result = 'Syntax Error!'
        }
      }
      return result
    }
    this.setState({
      result: checkEval(formula)
    })
  }

  removeLast = () => {
    const formulaLength = this.state.formula.length
    this.setState({
      formula: formulaLength === 1 ? '0' : this.state.formula.substring(0, formulaLength - 1)
    })
  }

  render() {
    return (
      <div>
        <div className="App">
        <div className="display">
          <ResultDisplay
            result={this.state.result}
          />
          <Formula
            formula={this.state.formula}
          />      
        </div>
          <Buttons
            handleButtonClick={this.handleButtonClick}
          />
      </div>
      <Footer />
      </div>

    )
  }
}

export default App
