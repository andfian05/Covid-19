import styles from "./Form.module.css";
import  { useState } from "react";
import { nanoid } from 'nanoid';




function Form() {
    
    const [jumlah, setJumlah] = useState("");
   
    

    // const [addFormData, setAddFormData] = useState({
    //     provinsi: '',
    //     status:'',
    //     jumlah:''
    // })
  
    // const handleAddForm = (event) => {
    //     event.preventDefault();


    //     const fieldName = event.target.getAttribute('name');
    //     const fieldValue = event.target.value;


    //     const newFormData = { ... addFormData};
    //     newFormData[fieldName] = fieldValue;

    //     setAddFormData(newFormData);

    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();


    //     const newContact = {
    //            id : nanoid(),
    //            provinsi : addFormData.provinsi,
    //            status : addFormData.status,
    //            jumlah : addFormData.jumlah,
    //     };

    //     const newContacts = [...contacts, newContact];
    //     setContacts(newContacts); 

    // };







    //video kakak aufa

    //handleJumlah
    //setiap data yang diinput maka ditangkap dan seterusnya ...
    function handleJumlah(e){
        setJumlah(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Cegah");

       

        
    }




    return(
        <div className={styles.container}>
            <section className={styles.form}>
              
                <div className={styles.form__left}>
                    <img className={styles.form__image} src="https://media.discordapp.net/attachments/894919708938223657/961641885640818758/AddCovidForm.jpg" alt=""/>
                </div>


                

                <div className={styles.form__right}>
                    <h1 className={styles.form__title}>Form Covid</h1>
                    {/* <form  className={styles.Form__add}  >
                        
                        <div className={styles.Form__control}>
                            <p htmlFor="title">Title</p>
                            <input className={styles.Form__inputone} type="text" 
                           
                        
                            />

                          
                        </div>
                        
                        <div className={styles.Form__control}>
                            <p>Year</p>
                            <input className={styles.Form__inputtwo} type="date" 
                           
                            />

                           
                            
                        </div>


                        <div className={styles.Form__control}>
                            <p>Link Gambar</p>
                            <input className={styles.Form__inputhree} type="text" 
                           
                            
                            />

                            
                        </div>

                        <div className={styles.Form__control}>
                            <p>Select Movie</p>
                            <select name="select" id="" >
                                <option value=""></option>
                                <option value="Horor">Horor</option>
                                <option value="Romance">Romance</option>
                                <option value="Survival">Survival</option>
                            </select>

                            
                        </div>

                        
                        
                        <button className={styles.Form__button} >Submit</button>
                    </form> */}


        <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
                <label htmlFor="provinsi" className={styles.form__label}>Provinsi</label>
                {/* onChange={handleAddForm} */}


                    <select name="provinsi" id="" className={styles.form__select}  >
                        <option value=""></option>
                        <option value="" >Data Ke-1</option>
                        <option value="" >Data Ke-2</option>
                        <option value="" >Data Ke-3</option>
                    </select>              
            
            </div>

            <div className={styles.form__group}>
                <label htmlFor="status" className={styles.form__label}>Status</label>
                {/* onChange={handleAddForm} */}


                    <select name="status" id="" className={styles.form__select}  >
                        <option value=""></option>
                        <option value="" >Data Ke-1</option>
                        <option value="" >Data Ke-2</option>
                        <option value="" >Data Ke-3</option>
                    </select>              
            
            </div>

            
            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>Jumlah</label>
              {/* onChange={handleAddForm}   name="jumlah" */}



              <input id="jumlah" className={styles.form__input} type="text" value={jumlah}  onChange={handleJumlah} />
            
            </div>
            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>

                </div>
            </section>
        </div>


    );
  }




export default Form;