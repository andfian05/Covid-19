import { useState } from "react";
import data from "../../utils/constants/indonesia";

import styles from "./Card.module.css";

function Card(props){
    // const { card } = props;
   
    
    // const atas = (
    //     <div className={styles.cards__one}>
    //         {props.data.map((post) => 
    //             <h1 key={post.status}>{post.status}</h1>
                
    //         ) }

            
            
    //     </div> 
    // );


    // const bawah = (
    //     <div className={styles.cards__one}>
          

    //         {props.data.map((post) => 
    //             <h1 className={styles.cards__descOne} value="" key={post.total}>{post.total}</h1>
                
    //         ) }
            
    //     </div> 
    // );


    // const model = data.map((n) => {
        
    // })



    return (

        // var listData = props.arrayData.map(function(data){
        //     return 
    // )}

     
        // cards.map((value) => {
        //      return (
           



        //      )

                   


        // })

     
        <div className={styles.two__justfy}>
        <div className={styles.cards__items}>
                <div className={styles.cards__one}>
                    <h1>Positif</h1>
                    <h1 className={styles.cards__descOne} value="">6.005.646</h1>
                </div> 
        </div>


       <div className={styles.cards__items}>
            <div className={styles.cards__two}>
                <h1>Sembuh</h1>
                <h1 className={styles.cards__descTwo}>100.000</h1>
            </div>
        </div>

        <div className={styles.cards__items}>
            <div className={styles.cards__two}>
               <h1>Meninggal</h1>
               <h1 className={styles.cards__descThree}>10.000</h1> 
            </div>
        </div>   


    </div> 
    
    )
}


export default Card;