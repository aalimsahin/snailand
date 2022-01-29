import Question from "../../assets/question.png";

const WhyNotRarity = () => {
    return(
        <div className='height-100vh flex-column-center'>
            <span className='width-50 fs-400 fw-bold ta-center mb-3'>Why Not Rarity?</span>
            <span className='width-60 fs-125 mb-2'>SnaiLand Academy uses an all new reflectionary minting system that earns snail holders ALGO!
            <br/>
            <br/>
            This means that 10% of every minting fee is reflected back to existing ALGO Snail holders and can be claimed at any time!
            <br/>
            <br/>
            The rewards don't stop when minting is complete! In our marketplace original minters of ALGO Snail earn 1% royalties each time their ALGO Snail is resold and 3% of each sale is redistributed between all ALGO Snail holders.</span>
            <img src={Question} style={{width: "150px"}} alt="Logo" />
        </div>
    )
}

export default WhyNotRarity;