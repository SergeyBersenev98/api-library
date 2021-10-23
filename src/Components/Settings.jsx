import React from 'react';
import classes from '../CSS/MainPage.module.css'

const Settings = (props) => { 
  return(
    <div className={classes.dropdownMenu}>
      <div className={classes.dropdown}>
        <button className={classes.mainmenubtn}>Category: {props.category}</button>
        <div className={classes.dropdownchild}>
          <div onClick={()=>{props.setCategory("all")}}>all</div>
          <div onClick={()=>{props.setCategory("art")}}>art</div>
          <div onClick={()=>{props.setCategory("biography")}}>biography</div>
          <div onClick={()=>{props.setCategory("computers")}}>computers</div>
          <div onClick={()=>{props.setCategory("history")}}>history</div>
          <div onClick={()=>{props.setCategory("medical")}}>medical</div>
          <div onClick={()=>{props.setCategory("poetry")}}>poetry</div>
        </div>
       </div>

      <div className={classes.dropdown}>
        <button className={classes.mainmenubtn}>Sort by: {props.sortBy}</button>
        <div className={classes.dropdownchild}>
          <div onClick={()=>{props.setSorting("relevance")}}>relevance</div>
          <div onClick={()=>{props.setSorting("newest")}}>newest</div>   
        </div>
      </div>
    </div>
  )
}
export default Settings