import React, { useState } from 'react'
import {InputGroup, Input, InputGroupAddon , Button} from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';


function Search(props) {
    const [query, setQuery] = useState('')
    function clear(){
        setQuery('')
    }

    function handleClick(){
        if(!query){
            toast.error('Enter Name of the Book')
        } else {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=1`)
            .then(res=>{
                setTimeout(() => {
                        if(res.data.totalItems > 0){  
                                props.setItems(res.data.items)
                                props.setLoading(false)  
                            
                        }else if(res.data.totalItems === 0) {
                            toast.error("Not Found")
                            props.setLoading(false)
                        }
                    
                }, 500);
                props.setLoading(true)
                
            }).catch(error=>{
                props.setLoading(true)
                toast.error(`${error.response.data.error.message}`)
            })
        }
    }

    return (
        <div className='search d-flex justify-content-center align-item-center'>
            <ToastContainer></ToastContainer>
            <InputGroup size='lg' className='mb-3'>
                <Input placeholder='Search Book' className='search-input' value={query} style={{paddingRight:'0'}} onChange={(e)=>{setQuery(e.target.value)}}>
                
                </Input>
                <InputGroupAddon addonType="append" className='cross'><div><i class="fas fa-times" onClick={clear}></i></div></InputGroupAddon>
                
            </InputGroup>
            <InputGroupAddon addonType='append'>
                <Button color='success' className='btn-search btn-lg' onClick={handleClick}>search</Button>
            </InputGroupAddon>
        </div>
    )
}

export default Search;
