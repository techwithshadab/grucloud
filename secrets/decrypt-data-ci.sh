
openssl aes-256-cbc -md sha256 -d -out secrets/kp.pem -in secrets/kp.pem.enc -pass pass:$KEY
openssl aes-256-cbc -md sha256 -d -out examples/multi/config/default.env -in examples/multi/config/default.env.enc -pass pass:$KEY
openssl aes-256-cbc -md sha256 -d -out examples/multi/config/grucloud-e2e-f35e5f0a014a.json -in examples/multi/config/grucloud-e2e-f35e5f0a014a.json.enc -pass pass:$KEY