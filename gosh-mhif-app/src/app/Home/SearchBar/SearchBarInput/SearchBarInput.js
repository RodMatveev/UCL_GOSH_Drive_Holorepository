import React from 'react';
import { WithContext as ReactTags } from './react-tag-input';
import './SearchBarInput.css';
import search from '../../../../img/search.svg';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

var localTags;

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class SearchBarInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [
            ],
            suggestions: [
              //Body Parts
              /*{ id: "1.1", text: "Urinary", query: "urinary", className: "blue"},
              { id: "1.2", text: "Spinal", query: "spinal", className: "blue"},
              { id: "1.3", text: "Skin", query: "skin", className: "blue"},*/
              //Gender
              { id: "1.1", text: "Male", query: "male", className: "yellow"},
              { id: "1.2", text: "Female", query: "female", className: "yellow"},
              //Specific Organs
              { id: "2.1", text: "Urinary", query: "urinary", className: "blue"},
              { id: "2.2", text: "Spinal", query: "spinal", className: "blue"},
              { id: "2.3", text: "Skin", query: "skin", className: "blue"},
              { id: "2.4", text: "Lung", query: "lung", className: "blue"},
              //Age Ranges
              { id: "4.1", text: "0-9", query:"0-9", className: "violet"},
              { id: "4.2", text: "10-19", query:"10-19", className: "violet"},
              { id: "4.3", text: "20-39", query:"20-39", className: "violet"},
              { id: "4.4", text: "40-59", query:"40-59", className: "violet"},
              { id: "4.5", text: "60-99", query:"60-99", className: "violet"}
             ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.sendCallback = this.sendCallback.bind(this);

        localTags = [];
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log("Next state in Search Input: ");
      console.log(nextState);
      console.log("Num of tags in next state: ", nextState.tags.length);
      return true;
    }

    handleDelete(i) {
        /*localTags.splice(i, 1);
        console.log(localTags);
        this.setState({ tags: localTags
        }, function () {
          this.props.callbackFromParent(localTags);
        });*/
        const { tags } = this.state;
        this.setState({ tags: tags.filter((tag, index) => index !== i) }, function() {
          localTags = localTags.filter((tag, index) => index !== i);
          console.log("////////////////Local after deletion: ", [localTags]);
          this.sendCallback([localTags]);
        });
    }

    sendCallback(arrayToSend){
      console.log("***************arrayToSend after spread:", arrayToSend);
      this.props.callbackFromParent(arrayToSend);
    }

    handleAddition(tag) {
        // console.log(tag);
        // console.log('LocalTags length: ' + localTags.length);
        //let newArray = localTags.concat(tag.query);
        //console.log("***************Local Tags after concat:", newArray);
        this.setState({ tags: [...this.state.tags, tag] }, function() {
          console.log("*******************Local Tags before spread:", localTags);
          if(tag.query){
            localTags.push(tag.query);
          }else{
            localTags.push(tag.text);
          }
          this.sendCallback([localTags]);
        });
        /*this.setState(state => ({ tags: [...state.tags, tag]
        }, function () {
          console.log("Sending Callback");
          this.props.callbackFromParent(this.state.tags);
        }));*/
        //this.setState(state => ({ tags: [...state.tags, tag]}));
        //this.props.callbackFromParent(tag);
        //console.log(this.state.tags);
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        this.setState({ tags: newTags });
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
          <div className='searchBg'>
            <div className='allOfSearch'>
              <img src={search} className='searchIcon'/>
              <ReactTags
                inline tags={tags}
                id="inputId"
                suggestions={suggestions}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition}
                handleDrag={this.handleDrag}
                delimiters={delimiters}
                autocomplete={false}
                allowDragDrop={false}
              />
            </div>
          </div>
        )
    }
}

export default SearchBarInput;
