CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  nickname VARCHAR(255) NOT NULL,
  login_date DATE NOT NULL
);

CREATE TABLE game_state (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255) REFERENCES users(id),
  autoclicker_id VARCHAR(255) NOT NULL,
  cookie_count INT NOT NULL,
  click_value INT NOT NULL,
  last_update DATE NOT NULL
);

CREATE TABLE autoclicker (
  id VARCHAR(255) PRIMARY KEY,
  game_state_id VARCHAR(255) REFERENCES game_state(id),
  clicker_name VARCHAR(255) NOT NULL,
  stats INT NOT NULL
);