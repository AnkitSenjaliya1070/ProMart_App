import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Item,
  ItemImage,
  ItemsRow,
  LeftSideBar,
  LeftSidebarImage,
  LeftSidebarItem,
  LeftView,
  MainView,
  RedSelectedBar,
  RightSideBar,
  Screen,
  Section,
  SectionHeader,
  SectionLine,
  SidebarItemSeparator,
  styles,
} from './CategoriesScreenStyle';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors, Fonts, Images, Screens} from '../../../utils/theme';
import TextInputView from '../../../components/TextInputView/TextInputView';
import {localize} from '../../../functions/commonFunctions';
import CommonStyles, {
  SeparatorH,
  SubTextBlack,
} from '../../../utils/theme/commonStyle';

const categories = [
  {
    id: '1',
    name: 'Popular',
    icon: 'https://picsum.photos/300/200',
    sections: [
      {
        title: 'Top Deals',
        items: [
          {name: 'Best Sellers', image: 'https://picsum.photos/300/200'},
          {name: 'Sarees', image: 'https://picsum.photos/300/200'},
          {name: 'Westernwear', image: 'https://picsum.photos/300/200'},
          {name: 'Kids', image: 'https://picsum.photos/300/200'},
          {name: 'Footwear', image: 'https://picsum.photos/300/200'},
          {name: 'Beauty', image: 'https://picsum.photos/300/200'},
          {name: 'Bags & Luggage', image: 'https://picsum.photos/300/200'},
        ],
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
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [selectedCategoryId, setSelectedCategoryId] = useState('2');
  const selectedCategory = categories.find(
    cat => cat.id === selectedCategoryId,
  );

  return (
    <Screen>
      <TextInputView
        label={''}
        placeholder={localize('PM1')}
        value={''}
        returnKeyType={'done'}
        leftIcon={Images.searchIcon}
        leftIconStyle={CommonStyles.searchIconStyle}
        placeholderStyle={CommonStyles.placeholderStyle}
        style={styles.searchInput}
      />
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
                  <SubTextBlack
                    size={14}
                    color={
                      item.id === selectedCategoryId
                        ? Colors.redED
                        : Colors.black23
                    }
                    fontFamily={Fonts.ThemeRegular}
                    fontWeight={item.id === selectedCategoryId ? '600' : '400'}
                    style={CommonStyles.centerText}>
                    {item.name}
                  </SubTextBlack>

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
                <SubTextBlack
                  size={14}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={500}>
                  {section.title}
                </SubTextBlack>
                <SeparatorH val={0.5} />
                <SectionLine />
              </SectionHeader>

              <ItemsRow>
                {section.items.map((item, idx) => (
                  <Item
                    key={idx}
                    onPress={() =>
                      navigation.navigate(Screens.ProductScreen, {
                        categoryName: item.name,
                      })
                    }>
                    <ItemImage source={{uri: item.image}} />

                    <SubTextBlack
                      size={12}
                      color={Colors.gray59}
                      fontFamily={Fonts.ThemeRegular}
                      fontWeight={400}
                      style={CommonStyles.centerText}>
                      {item.name}
                    </SubTextBlack>
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
