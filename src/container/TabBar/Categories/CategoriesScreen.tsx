import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { Item, ItemImage, ItemsRow, ItemText, LeftSideBar, LeftSidebarImage, LeftSidebarItem, LeftSidebarText, LeftView, MainView, RedSelectedBar, RightSideBar, Screen, Section, SectionHeader, SectionLine, SectionTitle, SidebarItemSeparator } from './CategoriesScreenStyle';

// 1. Category data (image URLs are just placeholders)
const categories = [
  {
    id: '1',
    name: 'Popular',
    icon: 'https://picsum.photos/300/200',
    sections: [
      {
        title: 'Top Deals',
        items: [{name: 'Best Sellers', image: 'https://picsum.photos/300/200'}],
      },
    ],
  },
  {
    id: '2',
    name: 'Fashion',
    icon: 'https://picsum.photos/300/200',
    sections: [
      {
        title: 'Men’s Top Wear',
        items: [
          {name: 'All', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s T-Shirts', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Casual Shirts', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Formal Shirts', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Kurtas', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Ethnic Sets', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Blazers', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Raincoats', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Windcheaters', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Suit', image: 'https://picsum.photos/300/200'},
          {name: 'Men’s Fabrics', image: 'https://picsum.photos/300/200'},
        ],
      },
      {
        title: 'Men’s Bottom Wear',
        items: [
          {name: 'Jeans', image: 'https://picsum.photos/300/200'},
          {name: 'Trousers', image: 'https://picsum.photos/300/200'},
          {name: 'Track Pants', image: 'https://picsum.photos/300/200'},
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Appliances',
    icon: 'https://picsum.photos/300/200',
    sections: [],
  },
  {
    id: '4',
    name: 'Mobile',
    icon: 'https://picsum.photos/300/200',
    sections: [],
  },
  {
    id: '5',
    name: 'Electronics',
    icon: 'https://picsum.photos/300/200',
    sections: [],
  },
  {
    id: '6',
    name: 'Home',
    icon: 'https://picsum.photos/300/200',
    sections: [],
  },
  {
    id: '7',
    name: 'Furniture',
    icon: 'https://picsum.photos/300/200',
    sections: [],
  },
];


export default function CategoriesScreen() {

  const [selectedCategoryId, setSelectedCategoryId] = useState('2');
  const selectedCategory = categories.find(
    cat => cat.id === selectedCategoryId,
  );

  return (
    <Screen>
      {/* <TextInputView
        label={''}
        placeholder={localize('PM1')}
        value={''}
        returnKeyType={'done'}
        leftIcon={Images.searchIcon}
        leftIconStyle={CommonStyles.searchIconStyle}
        placeholderStyle={CommonStyles.placeholderStyle}
        style={styles.searchInput}
      /> */}
      <MainView>
        {/* Left Section */}
        <LeftView>
          <LeftSideBar
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setSelectedCategoryId(item.id)}>
                <LeftSidebarItem isActive={item.id === selectedCategoryId}>
                  <LeftSidebarImage source={{uri: item.icon}} />
                  <LeftSidebarText isActive={item.id === selectedCategoryId}>
                    {item.name}
                  </LeftSidebarText>
                  {item.id === selectedCategoryId && <RedSelectedBar />}
                </LeftSidebarItem>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <SidebarItemSeparator />}
          />
        </LeftView>

        {/* Right Section */}
        <RightSideBar>
          {selectedCategory.sections.map((section, index) => (
            <Section key={index}>
              <SectionHeader>
                <SectionTitle>{section.title}</SectionTitle>
                <SectionLine />
              </SectionHeader>

              <ItemsRow>
                {section.items.map((item, idx) => (
                  <Item key={idx}>
                    <ItemImage source={{uri: item.image}} />
                    <ItemText>{item.name}</ItemText>
                  </Item>
                ))}
              </ItemsRow>
            </Section>
          ))}
        </RightSideBar>
      </MainView>
    </Screen>
  );
}
