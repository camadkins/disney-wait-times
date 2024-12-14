export const fetchParksData = async (): Promise<any[]> => {
  return [
    { id: 1, name: "Magic Kingdom", isEnabled: true },
    { id: 2, name: "Epcot", isEnabled: false },
    { id: 3, name: "Hollywood Studios", isEnabled: true },
    { id: 4, name: "Animal Kingdom", isEnabled: false },
  ];
};

export const fetchRidesData = async (): Promise<any[]> => {
  return [
    { id: 101, park_id: 1, name: "Space Mountain", wait_time: 30, is_open: true },
    { id: 102, park_id: 1, name: "Pirates of the Caribbean", wait_time: 15, is_open: true },
    { id: 201, park_id: 2, name: "Test Track", wait_time: 45, is_open: false },
    { id: 202, park_id: 2, name: "Soarin'", wait_time: 20, is_open: true },
    { id: 301, park_id: 3, name: "Tower of Terror", wait_time: 50, is_open: true },
    { id: 302, park_id: 3, name: "Rock 'n' Roller Coaster", wait_time: 60, is_open: true },
    { id: 401, park_id: 4, name: "Avatar Flight of Passage", wait_time: 70, is_open: false },
    { id: 402, park_id: 4, name: "Expedition Everest", wait_time: 25, is_open: true },
  ];
};
