import React from 'react';

import SliderComponent from './common/SliderComponent';


const SliderSelect = ({data, setData}) => {
  const bank_limit = 10000

  return (
    <>
      <SliderComponent min={1000} 
                       max={bank_limit} 
                       defaultValue={data.homeValue} 
                       value={data.homeValue} 
                       step={100} 
                       label='Home Value' 
                       amount={data.homeValue} 
                       unit='$' 
                       onChange={(event, value) => setData({
                        ...data,
                        downPayment: value * 0.2,
                        loanAmount: value * 0.8,
                        homeValue: value,
                       })} />

      <SliderComponent min={0} 
                       max={data.homeValue} 
                       defaultValue={data.downPayment} 
                       value={data.downPayment} 
                       step={100} 
                       label='Down Payment' 
                       amount={data.downPayment} 
                       unit='$' 
                       onChange={(event, value) => setData({
                        ...data,
                        loanAmount: (data.homeValue - value),
                        downPayment: value,
                       })} />

      <SliderComponent min={0} 
                       max={data.homeValue} 
                       defaultValue={data.loanAmount} 
                       value={data.loanAmount} 
                       step={100} 
                       label='Loan Amount' 
                       amount={data.loanAmount} 
                       unit='$' 
                       onChange={(event, value) => setData({
                        ...data,
                        downPayment: (data.homeValue - value),
                        loanAmount: value,
                       })} />

      <SliderComponent min={2} 
                       max={18} 
                       defaultValue={data.interestRate} 
                       value={data.interestRate} 
                       step={0.5} 
                       label='Interest Rate' 
                       amount={data.interestRate} 
                       unit='%' 
                       onChange={(event, value) => setData({
                        ...data,
                        interestRate: value,
                       })} />
    </>
  )
}

export default SliderSelect;
