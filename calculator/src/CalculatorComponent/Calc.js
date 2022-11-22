import React, { useState } from "react";
 
import "./Calc.css"

 function Calculator(value){

    const [calc, setCalc]=useState({
        current:"0",
        total:"0",
        isInitial:true,
        preOp:""
    });
    function handleNumbers(value){
         let newValue=value;

         if(!calc.isInitial){
         newValue=calc.current+value;
         }
        setCalc({current:newValue, total:calc.total, isInitial:false, preOp:calc.preOp});

    }
    function handleOperator(value){
        const total=doCalculation();
        setCalc({current:total.toString(),total:total.toString(), isInitial:true, preOp:value});
    }

    function doCalculation(){
        let total=parseInt(calc.total);
        switch(calc.preOp){
            case "+":
                total += parseInt(calc.current);
                break;

            case "-":
                total -= parseInt(calc.current);
                break;

             case "*":
                total *= parseInt(calc.current);
                break;

            case "/":
                total /= parseInt(calc.current);
                break;
            default:
                total=parseInt(calc.current);
        }
        return total;

    }
    function renderDisplay(){
        return calc.current;
    }

    function handleClear(){
        setCalc({
            current:"0",
            total:"0",
            isInitial:true,
            preOp:""
        });
    }

    
    return(
        <div>
            <div className="row">
                <div className="col-lg-5"></div>
                <div className="col-lg-5 mt-5">
                <div className="calculator"  >
                    <div className="Display">{renderDisplay()}</div>
                        <CalButton value="7" onClick={handleNumbers}/>
                        <CalButton value="8"  onClick={handleNumbers}/>
                        <CalButton value="9"  onClick={handleNumbers}/>
                        <CalButton  className="button-operator" value="/" onClick={handleOperator}/>

                        <CalButton value="4"  onClick={handleNumbers}/>
                        <CalButton value="5" onClick={handleNumbers}/>
                        <CalButton value="6" onClick={handleNumbers}/>
                        <CalButton className="button-operator" value="*" onClick={handleOperator}/>

                        <CalButton value="1" onClick={handleNumbers}/>
                        <CalButton value="2" onClick={handleNumbers}/>
                        <CalButton value="3" onClick={handleNumbers}/>
                        <CalButton  className="button-operator" value="-" onClick={handleOperator}/>

                        <CalButton value="C" onClick={handleClear}/>
                        <CalButton value="0" onClick={handleNumbers}/>
                        <CalButton value="=" onClick={handleOperator}/>
                        <CalButton  className="button-operator" value="+" onClick={handleOperator}/>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        
        </div>
    );
 }
 const CalButton=(props)=>{
    return  <button className="button" onClick={()=>props.onClick(props.value)}>{props.value}</button>
         
 }
 export default Calculator;