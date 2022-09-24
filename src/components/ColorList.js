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
            console.log(i, colors)
        }
        setColorList(colors)
    }, [])

    const getRandomColor = () => {
        const randomInt = Math.floor(Math.random() * 16777215)
        return "#" + randomInt.toString(16)
    }

    return (
        <div className="color-list-wrap">
            <div
                className="color-list"
                style={{ backgroundColor: colorList[0] }}
            >
                <span className="color-code">{colorList[0]}</span>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[1] }}
            >
                <span className="color-code">{colorList[1]}</span>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[2] }}
            >
                <span className="color-code">{colorList[2]}</span>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[3] }}
            >
                <span className="color-code">{colorList[3]}</span>
            </div>
            <div
                className="color-list"
                style={{ backgroundColor: colorList[4] }}
            >
                <span className="color-code">{colorList[4]}</span>
            </div>
        </div>
    );
  }
  
  export default ColorList;
  