CREATE TABLE actions_log (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER,
    action TEXT NOT NULL,
    target TEXT ,
    ip INET,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    constraint fk_actions_log_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE SET NULL
)