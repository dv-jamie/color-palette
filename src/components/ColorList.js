import { useEffect, useState } from "react";
import "./ColorList.css";

function ColorList() {
    const [colorList, setColorList] = useState([])

    useEffect(() => {
        const colors = []
        let i = 0
        while(i < 5) {
            i++
            colors.push(getRandomColor())
        }
        setColorList(colors)
    }, [])

    const getRandomColor = () => {
        const randomInt = Math.floor(Math.random() * 16777215)
        return "#" + randomInt.toString(16)
    }
    
    const changeColor = (index) => {
        const newColorList = colorList.map((color, i) => {
            if(i === index) {
                return getRandomColor()
            }
            return color
        })
        setColorList(newColorList)
    }

    return (
        <div className="color-list-wrap">
            <div
                className="color-list"
                style={{ backgroundColor: colorList[0] }}
            >
                <div className="color-list-tools">
                    <span className="color-code">{colorList[0]}</span>
                    <span
                        className="material-symbols-outlined change-icon"
                        onClick={ () => changeColor(0) }
                    >cached</span>
                </div>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[1] }}
            >
                <div className="color-list-tools">
                    <span className="color-code">{colorList[1]}</span>
                    <span
                        className="material-symbols-outlined change-icon"
                        onClick={ () => changeColor(1) }
                    >cached</span>
                </div>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[2] }}
            >
                <div className="color-list-tools">
                    <span className="color-code">{colorList[2]}</span>
                    <span
                        className="material-symbols-outlined change-icon"
                        onClick={ () => changeColor(2) }
                    >cached</span>
                </div>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[3] }}
            >
                <div className="color-list-tools">
                    <span className="color-code">{colorList[3]}</span>
                    <span
                        className="material-symbols-outlined change-icon"
                        onClick={ () => changeColor(3) }
                    >cached</span>
                </div>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[4] }}
            >
                <div className="color-list-tools">
                    <span className="color-code">{colorList[4]}</span>
                    <span
                        className="material-symbols-outlined change-icon"
                        onClick={ () => changeColor(4) }
                    >cached</span>
                </div>
            </div>
        </div>
    );
  }
  
  export default ColorList;
  