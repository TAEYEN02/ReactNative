import { useContext } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { CartContext } from '../contexts/CartContext';

const CartScreen = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addItem = () => {
    const newItem = { id: Date.now().toString(), name: 'New Item' };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Item" onPress={addItem} />
      <ScrollView style={{ marginTop: 20 }}>
        {cart.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 5,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            }}
          >
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        ))}

        {/* 비어 있을 때 메시지 */}
        {cart.length === 0 && (
          <Text style={{ textAlign: 'center', marginTop: 20, color: '#888' }}>
            장바구니가 비어 있어요
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default CartScreen;
