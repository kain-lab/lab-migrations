import { argon2id } from 'hash-wasm';
import { randomBytes } from 'crypto';
import { Admin } from '../entity/admin';
import { AdminRoleRel } from '../entity/admin-role-rel';
import { getRepository } from 'typeorm';

export async function admin(vars: any) {
  const result = await getRepository(Admin).insert(
    {
      username: 'kain',
      password: await argon2id({
        password: 'pass@VAN1234',
        salt: randomBytes(16),
        parallelism: 1,
        iterations: 4,
        memorySize: 65536,
        hashLength: 32,
        outputType: 'encoded',
      }),
      call: 'kain',
      create_time: vars.time,
      update_time: vars.time,
    },
  );
  await getRepository(AdminRoleRel).insert({
    admin_id: result.identifiers[0].id,
    role_key: '*',
  });
}
