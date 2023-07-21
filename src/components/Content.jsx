import React, { useEffect } from "react";
import axios from "axios";

const Content = () => {
    const [ip, setIp] = React.useState('')
    const option = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        params: {
            apikey: import.meta.env.VITE_API_KEY
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
            'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
        }
    }
    const getData = async () => {
        try {
          const res = await axios(option)
          setIp(res.data)
        } catch (error) {
          window.alert("API Error! Please try again later.")
        }
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
          <span className="font-bold underline">{ip.ip}</span>
        </p>
      </section>
      <section className="mt-5 ">
        <h1 className="mb-5 text-xl font-bold">Your IP Information : </h1>
        <section className="text-left px-[5px] lg:px-[420px]">
          <div className="p-5 font-medium rounded-xl bg-slate-500">
            <h1>Ip Address : <span className="font-bold underline">{ip.ip}</span></h1>
            <h1>Country : <span className="font-bold underline">{ip.country}, {ip.countryISO2}</span></h1>
            <h1>City : <span className="font-bold underline">{ip.city}</span></h1>
            <h1>State : <span className="font-bold underline">{ip.state}</span></h1>
            <h1>ISP : <span className="font-bold underline">{ip.org}</span></h1>
            <h1>Currency : <span className="font-bold underline">{ip.currencyName}</span></h1>
            <h1>Phone Code : <span className="font-bold underline">{ip.stateCode}</span></h1>
            <h1>GMT : <span className="font-bold underline">{ip.gmt}</span></h1>
            <h1>Timezone : <span className="font-bold underline">{ip.timezone}</span></h1>
            <h1>Languages : <span className="font-bold underline">{ip.languages}</span></h1>
          </div>
        </section>
      </section>
      <section className="mt-5 px-[120px] lg:px-[550px]">
        <div>
          <img
            className="w-[100px] rounded-lg"
            src={ip.flag}
            alt="Country Flag"
          />
        </div>
      </section>
    </div>
  );
};

export default Content;
