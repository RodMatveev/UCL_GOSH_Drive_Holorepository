import React from 'react';
import { WithContext as ReactTags } from './react-tag-input';
import './SearchBarInput.css';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class SearchBarInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [
             ],
            suggestions: [
              //Body Parts
              { id: "1.1", text: "Chest", className: "blue"},
              { id: "1.2", text: "Abdomen", className: "blue"},
              { id: "1.3", text: "Head", className: "blue"},
              //Gender
              { id: "2.1", text: "Male", className: "yellow"},
              { id: "2.2", text: "Female", className: "yellow"},
              //Specific Organs
              { id: "3.1", text: "Lungs", className: "red"},
              { id: "3.2", text: "Liver", className: "red"},
              { id: "3.3", text: "Pancreas", className: "red"},
              { id: "3.4", text: "Cerebellum", className: "red"},
              //Age Ranges
              { id: "4.1", text: "0-9", className: "violet"},
              { id: "4.2", text: "10-19", className: "violet"},
              { id: "4.3", text: "20-39", className: "violet"},
              { id: "4.4", text: "40-59", className: "violet"},
              { id: "4.5", text: "60-99", className: "violet"}
             ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
        console.log(this.state.tags);
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
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
        )
    }
}

export default SearchBarInput;
