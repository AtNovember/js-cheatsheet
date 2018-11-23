import Model from './Model';

export default class Instance extends Model {
  plural = 'Instance';

  async getWithLocal(deviceId) {
    const filter = { include: 'location' };
    const res = await this.getRequest(`${this.plural}/${deviceId}`, { filter });
    return res;
  }

  // POST /Devices/saveSettings
  async saveSettings(id, values) {
    const res = await this.postRequest(`${this.plural}/saveSettings`, { id, ...values });
    return res;
  }

  async getDevice(id) {
    const res = await this.getRequest(`${this.plural}/${id}`);
    return res;
  }

  async update(name, deviceId, token) {
    console.log('update', name, deviceId, token);
    const res = await this.patchRequest(`${this.plural}/${deviceId}`, { name, token });
    return res;
  }

  async appendLocation(deviceId, location) {
    const res = await this.postRequest(`${this.plural}/appendLocation`, { id_Device: deviceId, location });
    return res;
  }
}