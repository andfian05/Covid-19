
import data from "../../utils/constants/indonesia";
import Card from "../Card/Card";
import styles from "./Two.module.css";



function Two() {
    const two =  data;


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

   
    

    return (
      <div className={styles.container}>
          <div className={styles.container}>
            <section className={styles.two}>
                <div className={styles.two__justfy}>
                    <h1 className={styles.two__title}>Indonesia</h1>
                    <p className={styles.two__litle}>Data Covid Berdasarkan Global</p>
                </div>
            </section>


            <section className={styles.two}>
              {/* Looping card dengan file Card */}
              {/* Nanti diprops biar mudah tertata rapih data globalnya */}

               

                
         {/* {
                this.two.map(function(card) {
                    return <Card keys={card} />;

                

           
           


                })
            }    
                 */}


           {/* {
               cards.map((value) => {
                    return <Card keys={value} />
               })

           } */}


           <Card />
              
            


                {/* <div className={styles.two__justfy}>
                    <div className={styles.cards__items}>
                       <div className={styles.cards__one}>
                            <h1>{value.status}</h1>
                            <h1 className={styles.cards__descOne} value="">6.005.646</h1>
                        </div>

                    </div>

                    <div className={styles.cards__items}>
                        <div className={styles.cards__two}>
                            <h1>Dirawat</h1>
                            <h1 className={styles.cards__descTwo}>100.000</h1>
                        </div>
                    </div>

                    <div className={styles.cards__items}>
                        <div className={styles.cards__two}>
                            <h1>Meninggal</h1>
                            <h1 className={styles.cards__descThree}>10.000</h1>
                        </div>
                    </div>  


                </div>  */}
            </section>

           
      </div>
    </div>
    );
  }




export default Two;