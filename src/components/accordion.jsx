import React from "react"

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    let isOpen = this.state.isOpen
    return (
      <div className="accordion" onClick={() => this.setState({
        isOpen: !isOpen
      })}>
        <div className='accordion-wrapper'>
          <div className="accordion-header">
            <span> { this.props.title } </span>
          </div>
          {isOpen ? (
            <div className={'accordion-inner ' + (isOpen ? 'accordion-open' : '')}>
              <div className="accordion-answer">
                {this.props.answer}
              </div>
            </div> 
          ) : (
            <div></div>
          )}   
        </div>
      </div>
    )
  }
}

export default Accordion
