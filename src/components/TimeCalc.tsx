import { useState } from 'react'
import Logo from '~/assets/mon.gif'
import './TimeCalc.css'

type HM = {
  h: number,
  m: number
}
type HMString = {
  h: string,
  m: string
}
const emptyElement : HM = {
  h: 0,
  m: 0,
}
const emptyElementString : HMString = {
  h: '0',
  m: '0',
}
function TimeCalc() {
  const [list, setList] = useState<HMString[]>(Array.from({length: 5}, () => emptyElementString))
  // const [compare, setCompare] = useState<HM>({ h: 35, m: 0})
  const [sum, setSum] = useState<HM>(emptyElement)

  const addElement = () => {
    return setList(prevList => [...prevList, emptyElementString])
  }

  const handleChange = (index:number) => (e:any) => {
    console.log(index, e)
    const newArray = list.map((item, i) => {
      if (index === i) {
        const { value } = e.target
        const str = value.replace(/[^0-9]/g, '')
        let num = str? parseInt(str) : 0
        if(e.target.name==='m' && parseInt(str)>59){
          alert("분은 59보다 클 수 없다!")
          num = 59;
        }

        return { ...item, [e.target.name]: num.toString() };
      } else {
        return item;
      }
    });
    setList(newArray);
    calculate(newArray);
  }

  const calculate = (newArray:HMString[]) => {
    const sumH:number = newArray.reduce((a, b) => a + parseInt(b.h), 0);
    const sumM:number = newArray.reduce((a, b) => a + parseInt(b.m), 0);

    const moreH:number = Math.floor(sumM/60);
    const remainM:number = sumM%60;

    setSum({h: sumH+moreH, m: remainM })
  }

  const li = list.map((e,i)=> 
    <tr key={i}>
      <td>
        <input type="number" value={e.h} placeholder='시간' name="h" onChange={handleChange(i)}/>
      </td>
      <td>
        <input type="number" value={e.m} placeholder='분' name="m" onChange={handleChange(i)}/>
      </td>
    </tr>
  )

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={Logo} className="logo" alt="mondaine" />
        </a>
      </div>
      <h1>TIME CALCULATOR</h1>
      <div className="card">
        <table>
          <thead>
            <tr>
              <td>시간</td>
              <td>분</td>
            </tr>
          </thead>
          <tbody>
            { li }
          </tbody>
        </table>
        <button onClick={addElement}>
          +
        </button>
      </div>
      <p className="read-the-docs">
        { sum.h } : { sum.m }
      </p>
    </>
  )
}

export default TimeCalc
