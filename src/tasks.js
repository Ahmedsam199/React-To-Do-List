import { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormControl, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import * as React from "react";
import swal from "sweetalert";
import Pagi from "./Pagi";
import {
  BrowserRouter,
  Router,
  Route,
Link,
  Switch,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Tasks = () => {
const notify = () =>
  toast.success("🦄 Deleted!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [id2,setId2]=useState("")
  const [cTask,setCTask]=useState([])
  const history = useHistory(); 
  const [datas, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(6);
  const val2 = useRef();
  const [task, setTask] = useState([]);
  const [tt, setName] = useState("");
    const [ID, setID] = useState("");
    const token=useSelector((state)=>state.state)

      const token2 = useSelector((state) => state);

      const config = {
        headers: {
          authorization: `Bearer ${token2.state}`,
        },
      };
       const bodyParameters = {
         key: "value",
       };
         axios
          .post("http://localhost:8000/test", bodyParameters, config)
          .then((res2) => {
            setID(res2.data.id);
          })
          

             useEffect(() => {
               axios.get("http://localhost:8000/all", {
                 headers: { authorization: `Bearer ${token2.state}` },
               }).then((res)=>{
                 setTask(res.data)
               });
             },[]);
             useEffect(() => {
               axios
                 .get("http://localhost:8000/allC", {
                   headers: { authorization: `Bearer ${token2.state}` },
                 })
                 .then((res) => {
                   setCTask(res.data);
                 });
             }, []);
       
  function Del(Item) {
     axios.delete(`http://localhost:8000/api/delete/${Item}`).then((res) => {
       console.log(res);
       setId2(Item);
       notify();
     });
  }
  function Del2(Item) {
    axios.delete(`http://localhost:8000/api/deleteC/${Item}`).then((res) => {
      console.log(res);
      setId2(Item);
      notify();
    });
 }

 

  
  const Edit = (item) => {
    // const newtask = setName(val2.current.value);
    axios
      .post(`http://localhost:8000/update/${item}`, {
        id: item,
        task: tt,
      })
      .then((res) => {
        console.log(res);
        console.log(typeof newtask);
      })
      .catch((err) => {
        console.log(err);
      });
  };

const test2 = (Item) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this task!!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Your file has been deleted (:", {
        icon: "success",
      }).then(()=>{
        task.splice((Item-1), 1);
        Del(Item);
        
        
      });
      
    } else {
      swal("Your file is safe!");
    }
  });
};
const Done=(Item,Task)=>{
axios.post('http://localhost:8000/api/newC',{
  task:Task,
  UserID:ID
}).then((res)=>{
  console.log(res)
})
console.log(Item);
task.splice((Item-1), 1);
Del(Item);
cTask.push({Item,Task})


  
}
const test3 = (Item) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this task!!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Your file has been deleted (:", {
        icon: "success",
      }).then(()=>{
        cTask.splice((Item-1), 1); 
        Del2(Item);
        
        
      });
      
    } else {
      swal("Your file is safe!");
    }
  });
};
const indexofLastPage = currentPage * postPerPage;
const indexofFirstPage = indexofLastPage - postPerPage;
const currentPostst = task.slice(indexofFirstPage, indexofLastPage);
const paginate = (pageN) => setCurrentPage(pageN);

  return (
    <div className="bg">
           <div className="cont">
      <ToastContainer />
        <div class="card-group">
        {currentPostst.map((x) => (
              <div key={x.id}>
                <Card className="card">
                  <Card.Body className="CardB">
                    <p>{x.task}</p>
                    <Link to={`/update/${x.id}`}>Update</Link>
                    <a style={{cursor:"pointer"}} variant="primary" onClick={handleShow}>
        More About the Task
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{x.task}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {x.Body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
     
                    <a className="btn" onClick={() => test2(x.id)}>
                      Delete me
                    </a>
                    <a  className="btn" onClick={() => Done(x.id,x.task)}>
                      Done
                    </a>
                  </Card.Body>
                </Card>
              </div>
            ))}
            </div>

 

          <div className="contat">
          <div class="card-group">
            {cTask.map((x) => (
              <div key={x.id}>
                <Card className="card">
                  <Card.Body>
                    <p>{x.task}</p>
               

                    <a  className="btn" onClick={() => test3(x.id)}>
                      Delete me
                    </a>
                  </Card.Body>
                </Card>
              </div>
            ))}

            
            </div>
            




          
          
          {/* { <div className="task-list"  >
            <p>{task}</p>
          </div> } */}
          <center>
            
            <div
              className="pagec"
              style={{
                position: "fixed-center",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "500px",
              }}
            >
              
              <Pagi
                postPerPage={postPerPage}
                totalposts={task.length}
                paginate={paginate}
              />
            </div>
          </center>
        </div>
      </div>

      <div className="add">
        {" "}
        <Link className="btn btn-dark" to="/insert">
          Add A new Task{" "}
        </Link>
        
      </div>
    </div>
  );
};

export default withRouter(Tasks);
