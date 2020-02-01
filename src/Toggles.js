import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { graphIngrList, graphToolList, uncommonIngrList } from './utils/graph_dict_apple_cake'
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const styles = {
    root: {
        display:"flex",
        justifyContent:"flex-start",
        marginTop:50,
        marginLeft:50

    },
    list:{
        width: '100%',
        maxWidth: 250,
        border:"1px solid black"
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      constraint:{
        display:"flex",
        flexDirection:"column",
        marginLeft:15,
        marginRight:10,
        padding:5,
        border:"1px solid black"
      },
      timeConstraintContainer:{
          display:"flex",
          flexDirection:"row",
          marginBottom:25
      },
      timeConstraintItem:{
          margin:5
    },
    timeContainerTitle:{
        padding:5
    },
    ingredientConstraintContainer:{
        display:"flex",
        justifyContent:"flex-start"
    },
    parentContainer:{
        display:"flex",
        flexDirection:"column",
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      formControl: {
        margin: 8,
        minWidth: 120,
        maxWidth: 250,
      },
  };


  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



class TogglesPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showConstraints:false,
            showLeastCommon:false,
            showTimeConstraint:false,
            showIngredientsConstraint:false,
            showToolConstraint:false,
            timeMinHour:null,
            timeMinMinute:null,
            timeMaxHour:null,
            timeMaxMinute:null,
            leastCommonIngredients:[],
            selectedLeastCommon:[],
            listOfIngredients:[],
            listOfTools:[],


            selectedUnusedIngredients:[],

            selectedIngredientsToAppear:[],

            selectedUnusedTools:[],

            selectedPreferedTools:[]
        }
        this.findNodesByIngredients = props.findNodesByIngredients.bind(this);
        this.handleConstraints = props.handleConstraints.bind(this)
    }


componentDidMount(){                                                      
    const leastCommonList = uncommonIngrList.slice(0, 10) //.map(obj=>obj.ingr_name);
    this.setState({
        leastCommonIngredients:leastCommonList,
        listOfIngredients:[...new Set(graphIngrList.sort())],
        listOfTools:[...new Set(graphToolList.sort())]
    })
}

handleChangeSwitchChange = switchName => event => {
    event.persist();
    this.setState((prev) => {
        return {
            ...prev,
            selectedLeastCommon: !(event.target && event.target.checked) ? [] : [...prev.selectedLeastCommon],
            [switchName]: event.target && event.target.checked,
            selectedPreferedTools: (switchName === 'showToolConstraint' && !(event.target && event.target.checked)) ? [] : [...prev.selectedPreferedTools]
        };
    })
};

handleTimeChange = fieldName => event =>{
    this.setState({
        [fieldName]:+Math.floor(event.target.value)
    })
}

handleLeastCommonIngredientChange = (value,arrayName) => () => {
    const currentIndex = this.state[arrayName].indexOf(value);
    const newChecked = [...this.state[arrayName]];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
        [arrayName]:newChecked
    })
};

handleArrayChange = (arrayName) =>(event) => {
    this.setState({
        [arrayName]:event.target.value
    })
  };
  kuku = (arrayName)=>(event,values)=>{

       this.setState({
        [arrayName]:values
    })
      console.log(values);
  }

componentDidUpdate(prevProps, prevState){
    if(JSON.stringify(prevState.selectedLeastCommon) !== JSON.stringify(this.state.selectedLeastCommon)){//need to update 
        this.findNodesByIngredients(this.state.selectedLeastCommon);
    }
    const prevConstraints = {
        timeMinHour:prevState.timeMinHour,
        timeMinMinute:prevState.timeMinMinute,
        timeMaxHour:prevState.timeMaxHour,
        timeMaxMinute:prevState.timeMaxMinute,
        selectedUnusedIngredients:prevState.selectedUnusedIngredients,
        selectedIngredientsToAppear:prevState.selectedIngredientsToAppear,
        selectedUnusedTools:prevState.selectedUnusedTools,
        selectedPreferedTools:prevState.selectedPreferedTools
    }
    const currentConstraints = {
        timeMinHour:this.state.timeMinHour,
        timeMinMinute:this.state.timeMinMinute,
        timeMaxHour:this.state.timeMaxHour,
        timeMaxMinute:this.state.timeMaxMinute,
        selectedUnusedIngredients:this.state.selectedUnusedIngredients,
        selectedIngredientsToAppear:this.state.selectedIngredientsToAppear,
        selectedUnusedTools:this.state.selectedUnusedTools,
        selectedPreferedTools:this.state.selectedPreferedTools
    }
    if(JSON.stringify(prevConstraints) !== JSON.stringify(currentConstraints)){
        this.handleConstraints(prevConstraints, currentConstraints) 
    }
}




    render(){
        const { classes } = this.props;
        return(
            <div>
                <FormControl component="fieldset" className={classes.root}>
                    <FormGroup>
                    
                        <FormControlLabel
                            control={
                            <Switch checked={this.state.showLeastCommon} size="medium"  onChange={this.handleChangeSwitchChange('showLeastCommon')}/>}
                            label="Show least common ingredients"
                        />
                        {this.state.showLeastCommon && <List className={classes.list}>
                            {this.state.leastCommonIngredients.map(ingredient=>{
                                return(
                                    <ListItem key={ingredient} style={{backgroundColor: this.state.selectedLeastCommon.indexOf(ingredient) !== -1 ? "orange" : ""}}  dense button onClick={this.handleLeastCommonIngredientChange(ingredient,"selectedLeastCommon")}>
                                        <ListItemText id={ingredient} primary={ingredient} />
                                    </ListItem>
                                )
                            })}
                        </List> 
                        }
                        <FormControlLabel
                            control={
                            <Switch checked={this.state.showConstraints} size="medium" onChange={this.handleChangeSwitchChange('showConstraints')}/>}
                            label="Add Constraints"
                        />
                    </FormGroup>
                </FormControl>
                {this.state.showConstraints && <div className={classes.constraint}>
                        <div className={classes.timeConstraintContainer}>
                        <FormControlLabel
                            value="top"
                            control={<Switch checked={this.state.showTimeConstraint} size="medium"  onChange={this.handleChangeSwitchChange('showTimeConstraint')}/>}
                            label="Add Time Constraint"
                            labelPlacement="top"
                            style={{justifyContent:"flex-end", paddingTop:15}}
                            />
                            {this.state.showTimeConstraint && <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                           {false && <div className={classes.timeConstraintContainer}>
                                <Typography variant="body2" style={{padding:15}}>Min Time:</Typography>
                                <div className={classes.timeConstraintItem}>
                                    <TextField
                                    label="Hours"
                                    type="number"
                                    style = {{width: 75}}
                                    onChange={this.handleTimeChange("timeMinHour")}
                                    value={this.state.timeMinHour}
                                    inputProps={{ min: "0" }}
                                   
                                    />
                                </div>
                                <div className={classes.timeConstraintItem}>
                                    <TextField
                                    label="Minutes"
                                    type="number"
                                    style = {{width: 75}}
                                    onChange={this.handleTimeChange("timeMinMinute")}
                                    value={this.state.timeMinMinute}
                                    inputProps={{ min: "0" }}
                                    />
                                </div>
                            </div>}
                            <div className={classes.timeConstraintContainer}>
                                <Typography variant="body2" style={{padding:15}}>Max Time:</Typography>
                                <div className={classes.timeConstraintItem}>
                                    <TextField
                                    label="Hours"
                                    type="number"
                                    style = {{width: 75}}
                                    onChange={this.handleTimeChange("timeMaxHour")}
                                    value={this.state.timeMaxHour}
                                    inputProps={{ min: "0" }}
                                    />
                                </div>
                                <div className={classes.timeConstraintItem}>
                                    <TextField
                                    label="Minutes"
                                    type="number"
                                    style = {{width: 75}}
                                    onChange={this.handleTimeChange("timeMaxMinute")}
                                    value={this.state.timeMaxMinute}
                                    inputProps={{ min: "0" }}
                                    />
                                </div>
                            
                               
                            </div>
                            </div>}

                            


                        </div>
                        <div className={classes.timeConstraintContainer}>
                            <FormControlLabel
                            value="top"
                            control={<Switch checked={this.state.showIngredientsConstraint} size="medium"  onChange={this.handleChangeSwitchChange('showIngredientsConstraint')}/>}
                            label="Add Ingredients Constraint"
                            labelPlacement="top"
                            style={{width:127, justifyContent:"flex-end", paddingTop:15}}
                            />
                            {this.state.showIngredientsConstraint && <div style={{display:"flex", flexDirection:"column"}}>
                            <div className={classes.ingredientConstraintContainer}>
                            <Autocomplete
                                            multiple
                                            onChange={this.kuku("selectedUnusedIngredients")}
                                            options={this.state.listOfIngredients}
                                            disableCloseOnSelect
                                            getOptionLabel={option => option}
                                            renderOption={(option, {selected}) => (
                                                <React.Fragment>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option}
                                                </React.Fragment>
                                            )}
                                            style={{ width: 220 }}
                                            renderInput={params => (
                                                <TextField
                                                {...params}
                                                fullWidth
                                                placeholder="Search Ingredient..."
                                                label="Do Not Use These Ingredients"
                                                color="secondary"
                                                InputLabelProps={{style:{color:"black"}}}
                                                style={{paddingTop:15}}
                                                />
                                            )}
                                        />


                                </div>
                                <div className={classes.ingredientConstraintContainer}>
                                <div className={classes.ingredientConstraintContainer}>
                                <Autocomplete
                                            multiple
                                            onChange={this.kuku("selectedIngredientsToAppear")}
                                            options={this.state.listOfIngredients}
                                            disableCloseOnSelect
                                            getOptionLabel={option => option}
                                            renderOption={(option, {selected}) => (
                                                <React.Fragment>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option}
                                                </React.Fragment>
                                            )}
                                            style={{ width: 250 }}
                                            renderInput={params => (
                                                <TextField
                                                {...params}
                                                fullWidth
                                                placeholder="Search Ingredient..."
                                                label="Want These Ingredients To Appear"
                                                color="secondary"
                                                InputLabelProps={{style:{color:"black", fontSize:14}}}
                                                style={{paddingTop:15}}
                                                />
                                            )}
                                        />


                                </div>
                                </div>
                            </div>}
                                
                        </div>

                        <div className={classes.timeConstraintContainer}>
                            <FormControlLabel
                            value="top"
                            control={<Switch checked={this.state.showToolConstraint} size="medium"  onChange={this.handleChangeSwitchChange('showToolConstraint')}/>}
                            label="Add Tool Constraint"
                            labelPlacement="top"
                            style={{width:127, justifyContent:"flex-end", paddingTop:15}}
                            />
                            {this.state.showToolConstraint && <div style={{display:"flex", flexDirection:"column"}}>
                            <div className={classes.ingredientConstraintContainer}>
                                <div className={classes.ingredientConstraintContainer}>
                                        <Autocomplete
                                            multiple
                                            onChange={this.kuku("selectedUnusedTools")}
                                            options={this.state.listOfTools}
                                            disableCloseOnSelect
                                            getOptionLabel={option => option}
                                            renderOption={(option, {selected}) => (
                                                <React.Fragment>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option}
                                                </React.Fragment>
                                            )}
                                            style={{ width: 220 }}

                                            renderInput={params => (
                                                <TextField
                                                {...params}
                                                fullWidth
                                                placeholder="Search Tool..."
                                                label="Can't Use"
                                                color="secondary"
                                                InputLabelProps={{style:{color:"black"}}}
                                                style={{paddingTop:15}}
                                                />
                                            )}
                                        />
                                </div>

                                </div>
                                <div className={classes.ingredientConstraintContainer}>
                                        <Autocomplete
                                            multiple
                                            onChange={this.kuku("selectedPreferedTools")}
                                            options={this.state.listOfTools}
                                            disableCloseOnSelect
                                            getOptionLabel={option => option}
                                            renderOption={(option, {selected}) => (
                                                <React.Fragment>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option}
                                                </React.Fragment>
                                            )}
                                            style={{ width: 220 }}

                                            renderInput={params => (
                                                <TextField
                                                {...params}
                                                fullWidth
                                                placeholder="Search Tool..."
                                                label="Prefered Tools"
                                                color="secondary"
                                                InputLabelProps={{style:{color:"black"}}}
                                                style={{paddingTop:15}}
                                                />
                                            )}
                                        />
                                </div>
                            </div>}
                                
                        </div>

                        
                </div>}
            </div>
        )
    }
}


export default withStyles(styles)(TogglesPanel);
