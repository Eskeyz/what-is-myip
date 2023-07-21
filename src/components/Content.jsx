import React, { useEffect } from "react";
import axios from "axios";

const Content = () => {
    const [ip, setIp] = React.useState('')
    const getData = async () => {
        const res = await axios.get('http://ip-api.com/json')
        setIp(res.data)
    }
    useEffect(() => {
        getData()
    })
    
  return (
    <div>
      <h1 className="text-4xl font-bold">What is my IP Address ? </h1>
      <section className="mt-10">
        <p className="text-xl font-medium">
          Your IP Address is :
          <span className="font-bold underline">{ip.query}</span>
        </p>
      </section>
      <section className="mt-5 ">
        <h1 className="mb-5 text-xl font-bold">Your IP Information : </h1>
        <section className="text-left px-[5px] lg:px-[420px]">
          <div className="p-5 font-medium rounded-xl bg-slate-500">
            <h1>Ip Address : <span className="font-bold underline">{ip.query}</span></h1>
            <h1>ISP : <span className="font-bold underline">{ip.isp}</span></h1>
            <h1>Country : <span className="font-bold underline">{ip.country}</span></h1>
            <h1>City : <span className="font-bold underline">{ip.city}</span></h1>
            <h1>State : <span className="font-bold underline">{ip.regionName}</span></h1>
            <h1>Country Code : <span className="font-bold underline">{ip.countryCode}</span></h1>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Content;
