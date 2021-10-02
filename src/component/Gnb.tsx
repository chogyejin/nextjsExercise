import { Menu } from 'semantic-ui-react';

export default function Gnb() {
  const activeItem = 'home';
  const activeItem2 = 'messages';
  const activeItem3 = 'friends';
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        //onClick={this.handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem2 === 'messages'}
        //onClick={this.handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem3 === 'friends'}
        //onClick={this.handleItemClick}
      />
    </Menu>
  );
}
