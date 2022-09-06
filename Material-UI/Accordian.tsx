import {Accordion,AccordionSummary,AccordionDetails,Typography, Stack} from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {useState} from 'react'

export default function Accordian() {

    const[expanded,setExpanded]=useState<string|false>(false)

    const handleChange=(isExpanded:boolean,panel:string)=>{
        setExpanded(isExpanded?panel:false)
    }
  return (
    <Stack  width='50%' >
        <Accordion expanded={expanded==='html'} onChange={(event,isExpanded)=>handleChange(isExpanded,'html')}>
            <AccordionSummary 
            id='html'
            aria-controls='html-content'
            expandIcon={<ExpandMoreOutlinedIcon/>}
           
            >
                <Typography color="primary"> What is HTML?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa fuga est doloremque blanditiis, excepturi veritatis quasi ratione veniam doloribus quibusdam obcaecati corrupti! Perspiciatis facilis ullam reiciendis quae officiis tempora!</Typography>
            </AccordionDetails>
        </Accordion>
        {/* Accordion 2 */}
        <Accordion expanded={expanded==='CSS'} onChange={(event,isExpanded)=>handleChange(isExpanded,'CSS')}>
            <AccordionSummary 
            id='CSS'
            aria-controls='CSS-content'
            expandIcon={<ExpandMoreOutlinedIcon/>}
           
            >
                <Typography color="primary"> What is CSS?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa fuga est doloremque blanditiis, excepturi veritatis quasi ratione veniam doloribus quibusdam obcaecati corrupti! Perspiciatis facilis ullam reiciendis quae officiis tempora!</Typography>
            </AccordionDetails>
        </Accordion>
        {/* Accordion 3 */}

        <Accordion expanded={expanded==='Java-Script'} onChange={(event,isExpanded)=>handleChange(isExpanded,'Java-Script')}>
            <AccordionSummary 
            id='Java-Script'
            aria-controls='JS-content'
            expandIcon={<ExpandMoreOutlinedIcon/>}
           
            >
                <Typography color="primary"> What is Java Script?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa fuga est doloremque blanditiis, excepturi veritatis quasi ratione veniam doloribus quibusdam obcaecati corrupti! Perspiciatis facilis ullam reiciendis quae officiis tempora!</Typography>
            </AccordionDetails>
        </Accordion>
    </Stack>
  )
}
