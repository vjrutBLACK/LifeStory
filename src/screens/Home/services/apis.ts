import * as apiCaller from '@services/api';
import * as apiCallerAuth from '@services/auth';
import {
  AddExistingProfileInput,
  CreateAlbumInput,
  ApproveProfileInput,
  GetFilesByTimelineOfUserAllInput,
  GetFilesByTimelineOfUserPagingInput,
  InsertProfileInput,
  InsertUsersInput,
  RejectProfileInput,
  UpdateProfileInput,
} from '../redux/action-types';
import {LoginInput, UserInfo, RegisterInput} from '@screens/Auth/redux/action-types';

export const getYearTimelinesApi = async (data: string): Promise<any> => {
  const result = await apiCaller.get<any, string>(`api/UserFile/GetYearTimelines?userId=${data}`);
  return result;
};

export const getFilesByUserIdApi = async (data: string): Promise<any> => {
  const result = await apiCaller.post<any, string>(`api/UserFile/GetFilesByUserId?userId=${data}`);
  return result;
};
export const getFilesByTimelineOfUserPagingApi = async (data: GetFilesByTimelineOfUserPagingInput): Promise<any> => {
  const result = await apiCaller.post<any, GetFilesByTimelineOfUserPagingInput>(
    `api/UserFile/GetFilesByTimelineOfUserPaging?userId=${data.userId}&year=${data.year}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
    data,
  );
  return result;
};
export const getFilesByTimelineOfUserAllApi = async (data: GetFilesByTimelineOfUserAllInput): Promise<any> => {
  const result = await apiCaller.post<any, GetFilesByTimelineOfUserAllInput>(
    `api/UserFile/GetFilesByTimelineOfUserAll?userId=${data.userId}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
    data,
  );
  return result;
};
export const getFilesByTimelineOfUserApi = async (data: string): Promise<any> => {
  const result = await apiCaller.get<any, string>(`api/UserFile/GetFilesByTimelineOfUser?userId=${data}`);
  return result;
};
export const addExistingProfileApi = async (data: AddExistingProfileInput): Promise<any> => {
  const result = await apiCaller.post<any, AddExistingProfileInput>(`api/UserProfile/AddExistingProfile`, data);
  return result;
};
export const approveProfileApi = async (data: ApproveProfileInput): Promise<any> => {
  const result = await apiCaller.post<any, ApproveProfileInput>(`api/UserProfile/ApproveProfile`, data);
  return result;
};
export const createAlbumApi = async (data: CreateAlbumInput): Promise<any> => {
  const result = await apiCaller.post<any, CreateAlbumInput>(`api/Album/CreateAlbum`, data);
  return result;
};
export const getUserByUserNameApi = async (data: string): Promise<any> => {
  const result = await apiCaller.post<any, string>(`api/Users/GetUserByUserName?userName=${data}`);
  return result;
};
export const insertProfileApi = async (data: InsertProfileInput): Promise<any> => {
  const result = await apiCaller.post<any, InsertProfileInput>(`api/UserProfile/InsertProfile`, data);
  return result;
};
export const insertUsersApi = async (data: InsertUsersInput): Promise<any> => {
  const result = await apiCallerAuth.post<any, InsertUsersInput>(`/api/Users/InsertUsers`, data);
  return result;
};
export const rejectProfileApi = async (data: RejectProfileInput): Promise<any> => {
  const result = await apiCaller.post<any, RejectProfileInput>(`api/UserProfile/RejectProfile`, data);
  return result;
};
export const updateAvatarApi = async (data: string): Promise<any> => {
  const result = await apiCaller.post<any, string>(`api/Users/UpdateAvatar?userId=${data}`, data);
  return result;
};
export const updateProfileApi = async (data: UpdateProfileInput): Promise<any> => {
  const result = await apiCaller.post<any, UpdateProfileInput>(`api/Profile/UpdateProfile`, data);
  return result;
};
export const uploadFilesApi = async (data: RegisterInput): Promise<any> => {
  const result = await apiCaller.post<any, RegisterInput>(`/api/Users/InsertUsers`, data);
  return result;
};
