import { useState } from "react";
import data from "../../utils/constants/provinces";
import styles from "./Provinsi.module.css";




function Provinsi(props) {
    //mengembalikan sebuah data props
    // const { prov } = data;
    const data = props.data;

    // //memberikan nilai kosong agar bisa diinput
    let loop = '';

    const { value, no } = props;


    return (

    
      <div className={styles.container}>
          <div className={styles.container}>
            <section className={styles.prov}>
                <div className={styles.prov__justfy}>
                    <h1 className={styles.prov__title}>Provinsi</h1>
                    <p className={styles.prov__litle}>Data Covid Berdasarkan Provinsi</p>
                </div>


                <div>
                <table className={styles.provTable}>
                    <thead>
                        <th value="">No</th>
                        <th value="">Provinsi</th>
                        <th value="">Positif</th>
                        <th value="">Sembuh</th>
                        <th value="">Dirawat</th>
                        <th value="">Meninggal</th>
                    </thead>
                   
                       
                            
                        //cara 1
                        {/* {contacts.map((contact) => (
                        
                        <tr>
                            <td data-label="No">1</td>
                            <td data-label="Provinsi">{contact.kota}</td>
                            <td data-label="Positif">{contact.kasus}</td>
                            <td data-label="Sembuh">{contact.sembuh}</td>
                            <td data-label="Meninggal">{contact.meninggal}</td>
                            <td data-label="Dirawat">{contact.dirawat}</td>
                        </tr>
                        
                        
                        ))}  */}


                    //cara 2 
                    {/* 
                        { data.map((value) => {
                            loop++
                            return <tbody value={value} no={no}>
                            <tr>
                                <td>{no}</td>
                                <td>{value.kota}</td>
                                <td>{value.kasus}</td>
                                <td>{value.sembuh}</td>
                                <td>{value.meninggal}</td>
                                <td>{value.dirawat}</td>
                            </tr> 
                        </tbody>
                        
                    })
                 } */}


                 //cara 3
//                     { data.map((value) => {
//                             loop++
//                             return <Provinsi value={value}  no={no}/>
                           
//                     })
//                  } 

//                         <tbody value={value} no={no}>
//                             <tr>
//                                 <td>{no}</td>
//                                 <td>{value.kota}</td>
//                                 <td>{value.kasus}</td>
//                                 <td>{value.sembuh}</td>
//                                 <td>{value.meninggal}</td>
//                                 <td>{value.dirawat}</td>
//                             </tr> 
//                         </tbody>

                 {/* buka yang ini */}
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jakarta</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr> 
                        </tbody> 
                    
                    
                </table>
                </div>
            </section>

            
           
      </div>
    </div>
                    
    );
  }




export default Provinsi;
