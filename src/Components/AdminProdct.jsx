import React, { useEffect, useReducer, useRef, useState } from 'react';
import { API } from '../Utils/Url';
import "../Stayles/adminProdct.css";

function AdminProdct() {
  const [id, setid] = useState("");
  const [admproduct, setadmproduct] = useState({});
  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  const [proadm, setproadm] = useState(null);

  useEffect(() => {
    getAdmProdct();
  }, [ignore]);
  let nomi = useRef();
  let info = useRef();
  let rasmi = useRef();
  let price = useRef();
  let count = useRef();
  let details = useRef();
  let shipping = useRef();
  let size = useRef();

  let upnomi = useRef();
  let upinfo = useRef();
  let uprasmi = useRef();
  let upprice = useRef();
  let upcount = useRef();
  let updetails = useRef();
  let upshipping = useRef();
  let upsize = useRef();
  let updateFormElem = useRef();


  async function getAdmProdct() {
    let fetchData = await fetch(API + "products");
    let json = await fetchData.json();
    setproadm(json.data);
    forceUpdate();
  }

  async function createAdmProdct(e) {
    e.preventDefault();
    let tayyor = {
      name: nomi.current.value,
      description: info.current.value,
      imageLink: rasmi.current.value,
      price: price.current.value,
      count: count.current.value,
      details: details.current.value,
      shipping: "ok",
      size: ["asd"],
    };

    await fetch(API + "products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tayyor)
    });

    nomi.current.value = "";
    info.current.value = "";
    rasmi.current.value = "";
    price.current.value = "";
    count.current.value = "";
    details.current.value = "";
    shipping.current.value = "";
    size.current.value = "";
    forceUpdate();
  }

  async function deleteAdmProdct(e) {
    await fetch(API + `products/${e.target.id}`, {
      method: "DELETE"
    });
    forceUpdate();
  }


  function openUpdateForm(e) {
    const findedCard = proadm?.find((item) => item._id === e.target.id);
    setadmproduct(findedCard);
    setid(e.target.id);
    updateFormElem.current.classList.add("show_update_form");
  
    setTimeout(() => {
      if (findedCard) {
        upnomi.current.value = findedCard.name || "";
        upinfo.current.value = findedCard.description || "";
        uprasmi.current.value = findedCard.imageLink || "";
        upprice.current.value = findedCard.price || "";
        upcount.current.value = findedCard.count || "";
        updetails.current.value = findedCard.details || "";
        upshipping.current.value = findedCard.shipping || "";
        upsize.current.value = findedCard.size?.[0] || "";
      }
    }, 0);
  }
  

  async function updateAdmProdct(e) {
    e.preventDefault();
    let tayyor = {
      name: upnomi.current.value,
      description: upinfo.current.value,
      imageLink: uprasmi.current.value,
      price: upprice.current.value,
      count: upcount.current.value,
      details: updetails.current.value,
      shipping: "ok",
      size: ["asas"],
      cat_ref_id:[]

    };
    await fetch("https://umar-aka-backend-2.onrender.com/products/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tayyor)
    });
    updateFormElem.current.classList.remove("show_update_form");
    forceUpdate();
  }


  return (
    <div>
      <h2> AdminProduct</h2>
      <div className='admin_wrapper'>
        <form onSubmit={(e) => createAdmProdct(e)} className='form ali'>
          <h2>Create</h2>
          <h5>Title</h5>
          <input ref={nomi} type="text" placeholder='title' />
          <h5>Description</h5>
          <input ref={info} type="text" placeholder='description' />
          <h5>Image link</h5>
          <input ref={rasmi} type="text" placeholder='imageLink' />
          <h5>price</h5>
          <input ref={price} type="number" placeholder='price' />
          <h5>count</h5>
          <input ref={count} type="number" placeholder='count' />
          <h5>details</h5>
          <input ref={details} type="text" placeholder='details' />
          <h5>Shipping</h5>
          <input ref={shipping} type="text" placeholder='shipping' />
          <h5>size</h5>
          <input ref={size} type="text" placeholder='size' />
          <button type="submit">Create</button>
        </form>

        <form onSubmit={(e) => updateAdmProdct(e)} ref={updateFormElem} className='update_form'>
          <h2>Update</h2>
          <h5>Title</h5>
          <input ref={upnomi} type="text" defaultValue={admproduct?.name} />
          <h5>Description</h5>
          <input ref={upinfo} type="text" defaultValue={admproduct?.description} />
          <h5>Image link</h5>
          <input ref={uprasmi} type="text" defaultValue={admproduct?.imageLink} />
          <h5>price</h5>
          <input ref={upprice} type="number" defaultValue={admproduct?.price} />
          <h5>count</h5>
          <input ref={upcount} type="number" defaultValue={admproduct?.count} />
          <h5>details</h5>
          <input ref={updetails} type="text" defaultValue={admproduct?.details} />
          <h5>Shipping</h5>
          <input ref={upshipping} type="text" defaultValue={admproduct?.shipping} />
          <h5>size</h5>
          <input ref={upsize} type="text" defaultValue={admproduct?.size} />
          <button type="submit">Update</button>
        </form>

        <div className='mini_wrapper'>
          {proadm?.map((item) => {
            return (
              <div className="mini_card" key={item?._id}>
                <img width={30} src={item?.imageLink} alt="" />
                <div>
                  <h4>{item?.name}</h4>
                  <p>{item?.description}</p>
                  <button onClick={(e) => openUpdateForm(e)} id={item._id}>Update</button>
                  <button onClick={(e) => deleteAdmProdct(e)} id={item._id}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminProdct;
