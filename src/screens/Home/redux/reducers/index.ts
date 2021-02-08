import {UploadFilesState} from './../action-types/UploadFiles';
import {UpdateProfileState} from './../action-types/UpdateProfile';
import {InsertProfileState} from './../action-types/InsertProfile';
import {combineReducers} from 'redux';
import {GetFilesByTimelineOfUserState} from '../action-types/GetFilesByTimelineOfUser';
import {GetFilesByTimelineOfUserAllState} from '../action-types/GetFilesByTimelineOfUserAll';
import {GetFilesByTimelineOfUserPagingState} from '../action-types/GetFilesByTimelineOfUserPaging';
import {GetFilesByUserIdState} from '../action-types/GetFilesByUserId';
import {GetYearTimelinesState} from '../action-types/GetYearTimelines';
import GetFilesByTimelineOfUser from './GetFilesByTimelineOfUser';
import GetFilesByTimelineOfUserAll from './GetFilesByTimelineOfUserAll';
import GetFilesByTimelineOfUserPaging from './GetFilesByTimelineOfUserPaging';
import GetFilesByUserId from './GetFilesByUserId';
import GetYearTimelines from './GetYearTimelines';
import {GetUserByUserNameState} from '../action-types/GetUserByUserName';
import {AddExistingProfileState} from '../action-types/AddExistingProfile';
import {ApproveProfileState} from '../action-types/ApproveProfile';
import {CreateAlbumState} from '../action-types/CreateAlbum';
import {InsertUsersState} from '../action-types/InsertUsers';
import {RejectProfileState} from '../action-types/RejectProfile';
import {UpdateAvatarState} from '../action-types/UpdateAvatar';
import GetUserByUserName from './GetUserByUserName';
import AddExistingProfile from './AddExistingProfile';
import CreateAlbum from './CreateAlbum';
import InsertUsers from './InsertUsers';
import InsertProfile from './InsertProfile';
import RejectProfile from './RejectProfile';
import UpdateAvatar from './UpdateAvatar';
import UpdateProfile from './UpdateProfile';
import UploadFiles from './UploadFiles';
import ApproveProfile from './ApproveProfile';

export interface HomeModuleState {
  getYearTimelinesState: GetYearTimelinesState;
  getFilesByTimelineOfUserState: GetFilesByTimelineOfUserState;
  getFilesByUserIdState: GetFilesByUserIdState;
  getFilesByTimelineOfUserPagingState: GetFilesByTimelineOfUserPagingState;
  getFilesByTimelineOfUserAllState: GetFilesByTimelineOfUserAllState;
  getUserByUserNameState: GetUserByUserNameState;
  addExistingProfileState: AddExistingProfileState;
  approveProfileState: ApproveProfileState;
  createAlbumState: CreateAlbumState;
  insertUsersState: InsertUsersState;
  insertProfileState: InsertProfileState;
  rejectProfileState: RejectProfileState;
  updateAvatarState: UpdateAvatarState;
  updateProfileState: UpdateProfileState;
  uploadFilesState: UploadFilesState;
}

export default combineReducers<HomeModuleState>({
  getYearTimelinesState: GetYearTimelines,
  getFilesByTimelineOfUserState: GetFilesByTimelineOfUser,
  getFilesByUserIdState: GetFilesByUserId,
  getFilesByTimelineOfUserPagingState: GetFilesByTimelineOfUserPaging,
  getFilesByTimelineOfUserAllState: GetFilesByTimelineOfUserAll,
  getUserByUserNameState: GetUserByUserName,
  addExistingProfileState: AddExistingProfile,
  approveProfileState: ApproveProfile,
  createAlbumState: CreateAlbum,
  insertUsersState: InsertUsers,
  insertProfileState: InsertProfile,
  rejectProfileState: RejectProfile,
  updateAvatarState: UpdateAvatar,
  updateProfileState: UpdateProfile,
  uploadFilesState: UploadFiles,
});
