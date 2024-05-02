import { normalizeNotifications } from './notifications';

const testData = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders"
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25
    },
    context: {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  },
  // Add more test data if needed
];

test('normalizeNotifications returns correct result array', () => {
  const { result } = normalizeNotifications(testData);
  const expectedResults = [
    "5debd76480edafc8af244228",
    "5debd764507712e7a1307303",
    "5debd76444dd4dafea89d53b",
    "5debd76485ee4dfd1284f97b",
    "5debd7644e561e022d66e61a",
    "5debd7644aaed86c97bf9d5e",
    "5debd76413f0d5e5429c28a0",
    "5debd7642e815cd350407777",
    "5debd764c1127bc5a490a4d0",
    "5debd7646ef31e0861ec1cab",
    "5debd764a4f11eabef05a81d",
    "5debd764af0fdd1fc815ad9b",
    "5debd76468cb5b277fd125f4",
    "5debd764de9fa684468cdc0b"
  ];
  expect(result).toEqual(expectedResults);
});

test('normalizeNotifications returns correct users entity', () => {
  const { entities } = normalizeNotifications(testData);
  const expectedUser = {
    "5debd764a7c57c7839d722e9": {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    }
  };
  expect(entities.users).toEqual(expectedUser);
});

test('normalizeNotifications returns correct messages entity', () => {
  const { entities } = normalizeNotifications(testData);
  const expectedMessage = {
    "2d8e40be-1c78-4de0-afc9-fcc147afd4d2": {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  };
  expect(entities.messages).toEqual(expectedMessage);
});

test('normalizeNotifications returns correct notifications entity', () => {
  const { entities } = normalizeNotifications(testData);
  const expectedNotification = {
    "5debd76480edafc8af244228": {
      author: "5debd764a7c57c7839d722e9",
      context: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      id: "5debd76480edafc8af244228"
    }
  };
  expect(entities.notifications).toEqual(expectedNotification);
});
