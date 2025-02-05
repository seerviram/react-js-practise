import React from 'react'
import "./style.css";

const petData = [
    {
      animal: "Cheetah",
      fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
      image: "../src/assets/6.svg",
    },
    {
      animal: "Koala",
      fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
      image: "../src/assets/3.svg",
    },
    {
      animal: "Elephant",
      fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
      image: "../src/assets/1.svg",
    },
    {
      animal: "Zebra",
      fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
      image: "../src/assets/7.svg",
    }]

function Tabs() {
    const [activeTabIndex, setActiveTabIndex] = React.useState(0)
  return (
    <div>
       <div>
        <ul className='tabsHeaders'>
        {petData.map((pet, index)=> (<li onClick={()=> setActiveTabIndex(index)} >{pet.animal}</li>))}
        </ul>
       </div>
       <div  className='petConent'>
          {petData[activeTabIndex].fact}
       </div>
    </div>
  )
}

export default Tabs
