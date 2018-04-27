import axios from "axios";

/////////////////CONSTANTS/////////////////////
const GET_ALL_TASKS = "GET_ALL_TASKS";
const POST_TASK = "POST_TASK";
const CHANGE_STATUS = "CHANGE_STATUS";
const DELETE_TASK = "DELETE_TASK";

const LOGIN_COOPER = "LOGIN_COOPER";
const GET_ALL_POOLS = "GET_ALL_POOLS";
/////////////////ACTIONS//////////////
const getTasks = (tasks) => ({type: GET_ALL_TASKS, tasks});
const addTask = (task) => ({type: POST_TASK, task});
const changeStatus = (task) => ({type: CHANGE_STATUS, task});
const taskDelete = (slug) => ({type: DELETE_TASK, slug});

const loginCooper = (res) => ({type: LOGIN_COOPER, res});
const getPools = (pools) => ({type: GET_ALL_POOLS, pools});

 /*------------------------ Reducer ---------------------*/
 //Initiate your starting state
let initial = {
  tasks: [],
  pools: [],
  cookie: ""
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return Object.assign({}, state, {tasks: action.tasks.objects});
    case POST_TASK:
      let updatedTasks = [action.task].concat(state.tasks);
      return Object.assign({}, state, {tasks: updatedTasks});
    case CHANGE_STATUS:
      let newArr = state.tasks.map((task) => {
        if(task.slug === action.task.slug) task.metafields[0].value = !task.metafields[0].value;
        return task;
      });
      return Object.assign({}, state, {tasks: newArr});
    case DELETE_TASK:
      let arr = state.tasks.filter((task) => {
        return !(task.slug === action.slug);
      });
      return Object.assign({}, state, {tasks: arr});
    case LOGIN_COOPER:
      //let updatedTasks = [action.task].concat(state.tasks);
      return Object.assign({}, state, {res: updatedTasks});
    case GET_ALL_TASKS:
        return Object.assign({}, state, {pools: action.pools.objects});
    default:
      return state;
  }

};

export default reducer;

/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export const getAllTasks = () => dispatch => {
  axios.get(`https://api.cosmicjs.com/v1/your-bucket-slug-name/object-type/tasks`)
    .then((response) => {
      return response.data;
    })
    .then((tasks) => {
      dispatch(getTasks(tasks))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const login = (username, password) => dispatch => {
    axios.get(`https://cooperapp.me/login`, {username:username, password:password} )
      .then((res) => {
        return response.data;
      })
      .then((tasks) => {
        dispatch(getTasks(tasks))
      })
      .catch((err) => {
        console.error.bind(err);
      })
}

export const getAllPools = () => dispatch => {
    axios.get(`https://cooperapp.me/profile/pools`)
      .then((response) => {
        return response.data;
      })
      .then((tasks) => {
        dispatch(getTasks(tasks))
      })
      .catch((err) => {
        console.error.bind(err);
      })
  };

export const postNewTask = (task) => dispatch => {
  dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
  axios.post(`https://api.cosmicjs.com/v1/your-bucket-slug-name/add-object`, {type_slug: "tasks", title: task, content: "New Task",
    metafields: [
      {
        title: "Is Complete",
        key: "is_complete",
        value: false,
        type: "text"
      }
    ]})
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const putChangeStatus = (task, bool) => (dispatch) => {
  dispatch(changeStatus(task));
  axios.put(`https://api.cosmicjs.com/v1/your-bucket-slug-name/edit-object`, {slug: task.slug,
    metafields: [
      {
        title: "Is Complete",
        key: "is_complete",
        value: !bool,
        type: "text"
      }
    ]})
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

export const deleteTask = (slug) => (dispatch) => {
  dispatch(taskDelete(slug));
  axios.delete(`https://api.cosmicjs.com/v1/your-bucket-slug-name/${slug}`)
    .then((response) => {
    console.log(response.data)
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

const formatSlug = (title) => {
  let lower = title.toLowerCase();
  return lower.split(" ").join("-");
};
