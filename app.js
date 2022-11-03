
const accordion = document.querySelector('[data-js="accordion"]')

const closedAccordionItem = accordionHeaderToBeClosed =>{
    const accordionDeaderId = accordionHeaderToBeClosed.dataset.accordionHeader
    const accordionBodyToBeClosed = 
        document.querySelector(`[data-accordion-body="${accordionDeaderId}"]`)
    
    accordionHeaderToBeClosed.classList.remove('active')
    accordionBodyToBeClosed.classList.remove('active')
}

const handleAccordionClick = e =>{
    const accordionDeaderId = e.target.dataset.accordionHeader
    const clickedAccordionHeader =
        document.querySelector(`[data-accordion-header="${accordionDeaderId}"]`)
    const accordionItemToBeOpened = 
        document.querySelector(`[data-accordion-body="${accordionDeaderId}"]`)

    const accordionHeaderToBeClosed = Array
        .from(document.querySelectorAll('[data-js="accordion-header"]'))
        .filter(accordionHeader => accordionHeader !== clickedAccordionHeader)
        .find(accordionHeader => accordionHeader.classList.contains('active'))

    if(!e.target.dataset.accordionHeader){
        return
    }

    if(accordionHeaderToBeClosed) {
        closedAccordionItem(accordionHeaderToBeClosed)
    }

    clickedAccordionHeader.classList.toggle('active')
    accordionItemToBeOpened.classList.toggle('active')
}

accordion.addEventListener('click', handleAccordionClick)

