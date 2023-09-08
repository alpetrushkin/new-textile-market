import { AxiosInstance } from 'axios'
import { instance } from './index'

interface Result {
   total: number
   data: any
}

class Api {
   public instance: AxiosInstance

   constructor() {
      this.instance = instance
   }

   result(): Result {
      return {
         data: [],
         total: 0,
      }
   }

   async delete(url: string) {
      const result = this.result()
      try {
         const response = await this.instance.delete(url)
         if (response?.status === 200 && response?.data?.result) {
            result.data = response.data.result
         }
      } catch (e) {
         console.log(e)
      }
      return result
   }

   async patch(url: string, data: object) {
      const result = this.result()
      try {
         const response = await this.instance.patch(url, data)
         if (response?.status === 200 && response?.data?.result) {
            result.data = response.data.result
         }
      } catch (e) {
         console.log(e)
      }
      return result
   }

   async post(url: string, data: object, args?: object) {
      const result = this.result()
      try {
         const response = await this.instance.post(url, data, { params: args })
         if (response?.status === 200 && response?.data?.result) {
            result.total = response.data.total ?? 0
            result.data = response.data.result
         }
      } catch (e) {
         console.log(e)
      }
      return result
   }

   async get(url: string, args?: object) {
      const result = this.result()
      try {
         const response = await this.instance.get(url, { params: args })
         if (response?.status === 200 && response?.data?.result) {
            result.total = response.data.total ?? 0
            result.data = response.data.result
         }
      } catch (e) {
         console.log(e)
      }
      return result
   }
}

export const api = new Api()
