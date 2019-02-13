//  return (
//         <View>
//             <SearchBar 
//             placeholder="Type here..."
//             onChangeText= { (text) => {
//                 this.setState({search: text })}}
//             value={this.state.search}
//             />
//             <ScrollView>
//                 <View style={{ backgroundColor: '#C8BFBD', padding: 10 }}>
//                     <Text style={{ fontSize: 14, textAlign: 'center' }}>Recent searches</Text>
//                 </View>
//                 {
//                     filteredContacts.map((l, i) => (
//                         <ListItem
//                             roundAvatar
//                             key={i}
//                             avatar={{ source: { uri: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg' } }}
//                             title={l.name}
//                             subtitle={l.subtitle}
//                         >
//                             <Icon
//                                 name='location'
//                                 type='evilicon'
//                                 size={26}
//                             />
//                         </ListItem>
//                     ))
//                 }
//                 <View style={{ backgroundColor: '#C8BFBD', padding: 10 }}>
//                     <Text style={{ fontSize: 14 ,textAlign:'center'}}>People you know</Text>
//                 </View>
//                 {
//                     filteredContacts.map((l, i) => (
//                         <ListItem
//                             roundAvatar
//                             key={i}
//                             avatar={{ source: {  } }}
//                             title={l.name}
//                             subtitle={l.subtitle}
//                         />
//                     ))
//                 }
//                 <View style={{ backgroundColor: '#C8BFBD', padding: 10 }}>
//                     <Text style={{ fontSize: 14, textAlign: 'center' }}>Places you've been to</Text>
//                 </View>
//                 {
//                     filteredContacts.map((l, i) => (
//                         <ListItem
//                             roundAvatar
//                             key={i}
//                             avatar={{ source: { uri: 'https://image.flaticon.com/icons/svg/67/67347.svg' } }}
//                             title={l.name}
//                             subtitle={l.subtitle}
//                         />
//                     ))
//                 }
//             </ScrollView>
//         </View>
//     )


// render() {
//     let filteredContacts = list.filter(
//         (contact) => {
//             return contact.name.indexOf(this.state.search) !== -1;
//         })
//     }