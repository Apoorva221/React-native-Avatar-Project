import React, { Component } from 'react'
import {Text,View,ScrollView,Image} from 'react-native'
import {ListItem,Avatar,SearchBar,Icon} from 'react-native-elements'
import {connect} from 'react-redux'


 class AvatarListScreen extends Component {

    constructor() {
         super()
         this.state = {
             search: ''
         }
     }

    render() {

        let filteredContacts = this.props.list.filter(
            (contact) => {
                return contact.name.indexOf(this.state.search) !== -1;
            }
        )
        return(
            <View>
                <SearchBar
                    placeholder="Type here..."
                    onChangeText={(text) => {
                        this.setState({ search: text })
                    }}
                    value={this.state.search}
                />
                <ScrollView>
                    <View style={{ backgroundColor:'#C8C0BF',padding:8}}>
                        <Text style={{textAlign:'center'}}>People you know</Text>
                    </View>
                    {
                        filteredContacts.map((l,i)=> (
                            <ListItem
                                roundAvatar
                                key={i}
                                avatar={{ source: { uri: 'http://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg' } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }
                    <View style={{ backgroundColor: '#C8C0BF', padding: 8 }}>
                        <Text style={{ textAlign: 'center' }}>Favourites</Text>
                    </View>
                    {
                        filteredContacts.map((l, i) => (
                            <ListItem
                                roundAvatar
                                key={i}
                                avatar={{ source: { uri: 'http://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg' } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }
                    <View style={{ backgroundColor: '#C8C0BF', padding: 8 }}>
                        <Text style={{ textAlign: 'center' }}>Places you've visited</Text>
                    </View>
                    {
                        filteredContacts.map((l, i) => (
                            <ListItem
                                roundAvatar
                                key={i}
                                avatar={{ source: { uri: 'http://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg' } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }   
}

function mapStateToProps(state) {
    return {
        list : state.list
    }
}

export default connect (mapStateToProps)(AvatarListScreen)