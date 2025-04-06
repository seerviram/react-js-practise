import * as React from "react";
export default function AccordionHtml() {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleAccordian = (e) => {
    const selectedId = parseInt(e.target.dataset.id, 10);
    setSelectedIndex((prev) => (prev !== selectedId ? selectedId : -1));
  };

  return (
    <div onClick={handleAccordian}>
               <div  >
                HTML{" "}
                <span aria-hidden={true} data-id={1}>test</span>
                </div>
                    {selectedIndex === 1 && (
                    <div>
                        The HyperText Markup Language or HTML is the standard markup
                        language for documents designed to be displayed in a web browser.
                    </div>
                    )}

          <div data-id={2} >
            CSS <span aria-hidden={true} data-id={2} ></span>
          </div>
        {selectedIndex === 2 && (
          <div>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        )}
      

     
      <div data-id={3}>

          JavaScript{" "}
          <span aria-hidden={true} data-id={3} />
        </div>
        {selectedIndex === 3 && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        )}
      </div>
    
  );
}
