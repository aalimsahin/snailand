import SnailAcademy from "../../assets/snailAcademy.png";

const SnaiLandAcademy = () => {
    return(
        <div className='height-100vh flex-column-center'>
            <span className='width-50 fs-400 fw-bold ta-center mb-3'>About<br/>SnaiLand Academy</span>
            <span className='width-60 fs-125 mb-2'>At the SnaiLand Academy we don't have any dress codes, every snail is welcome! That said, some ALGO Apes have more style than others.
                <br/><br/>
            ALGO Snails are scored on a scale of 3 to 13 points. The ranking and background color of your ALGO Snail is determined by the total score of all attribute scores. Rarer items or features like an astronaut suit will score higher than common items like a bandana.</span>
            <img src={SnailAcademy} style={{width: "350px"}} alt="Logo" />
 
        </div>
    )
}

export default SnaiLandAcademy;