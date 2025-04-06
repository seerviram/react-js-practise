import React from 'react'

export const CardComonent = (props)=> {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            {props.company && <h3>{props.company}</h3>}
        </div>
    )
}

function HighOrderComponent(WrappedCompient) {
    return (props) => {
         const company = 'MS'
        return <WrappedCompient {...props} company={company} />
    }

}
const EnhancedComponent = HighOrderComponent(CardComonent)

export default EnhancedComponent;
