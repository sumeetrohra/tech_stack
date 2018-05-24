import React, { Component } from 'react';
import { Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    UIManager,
    Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    
    componentWillUpdate() {
        
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.textStyle}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
    const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    textStyle: {
        flex: 1, 
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
    }
};

const mapStateToProp = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProp, actions)(ListItem);
