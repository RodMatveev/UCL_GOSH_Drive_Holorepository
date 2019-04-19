import React from 'react';
import { WithContext as ReactTags } from './react-tag-input';
import './SearchBarInput.css';
import search from '../../../../img/search.svg';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

var localTags = [];

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class SearchBarInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: [
              //Body Parts
              { id: "1.1", text: "Chest", query: "chest", className: "blue"},
              { id: "1.2", text: "Abdomen", query: "abdomen", className: "blue"},
              { id: "1.3", text: "Head", query: "head", className: "blue"},
              //Gender
              { id: "2.1", text: "Male", query: "male", className: "yellow"},
              { id: "2.2", text: "Female", query: "female", className: "yellow"},
              //Specific Organs
              { id: "3.1", text: "Lungs", query: "lung", className: "red"},
              { id: "3.2", text: "Liver", className: "red"},
              { id: "3.3", text: "Pancreas", className: "red"},
              { id: "3.4", text: "Cerebellum", className: "red"},
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
    }

    handleDelete(i) {
        localTags.splice(i, 1);
        console.log(localTags);
        this.setState({ tags: localTags
        }, function () {
          this.props.callbackFromParent(localTags);
        });
    }

    handleAddition(tag) {
        console.log(tag);
        localTags.push(tag);
        console.log(localTags);
        this.setState({ tags: localTags
        }, function () {
          this.props.callbackFromParent(localTags);
        });
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
              />
            </div>
          </div>
        )
    }
}

export default SearchBarInput;
