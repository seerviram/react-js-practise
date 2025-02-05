import * as React from "react";
import "./App.css"
import AccordianItem from "./AccordianItem";

const data = [
    {
     question: 'What are accordion components?',
     answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.' ,
    },
    {
     question: 'What are they used for?',
     answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
    },
    {
     question: 'Accordion as a musical instrument',
     answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
    },
    {
     question: 'Can I create an accordion component with a different framework?',
     answer: 'Yes of course, it is very possible to create an accordion component with another framework.',
    }
   ];

export default function Accordion() {
   
    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const clickHandler = (index) => {
        setSelectedIndex(()=> index === selectedIndex ? -1: index )
    }

    return (
        <div>
            {data.map((item, index)=> (
            <AccordianItem 
            item={item}
            isOpen={index === selectedIndex}
            onClick={()=>clickHandler(index)}
            key={index}
            />
            ))}
        </div>
    )

}
