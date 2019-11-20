import React from 'react';

export default {
  title: 'Static Design',
};

export const newMemberFormDesign = () => (
  <main className="sm:flex-1">
    <div className="sm:bg-gray-200 overflow-auto h-screen sm:p-5">
      <div className="p-8 bg-white sm:rounded sm:shadow-lg">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-baseline">
            <h1 className="pb-2 sm:pb-5 font-bold">Új tag hozzáadása</h1>
            <div className="flex content-start justify-end">
              <button className="py-1 px-2 mr-2 rounded text-sm bg-blue-600 text-white inline-flex flex-row">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check"
                  className="svg-inline--fa fa-check fa-w-16 h-4 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                </svg>
                Mentés
              </button>
              <button className="py-1 px-2 rounded text-sm bg-blue-200 text-black">Mentés és új létrehozása</button>
            </div>
          </div>
          <div className="css-0">
            <div className="flex sm:flex-row flex-col pb-8">
              <div className="sm:w-1/3 text-sm pr-4">
                <div className="font-semibold py-2">Személyes adatok</div>
                <div className="text-gray-600">Itt adhatja meg a tag személyes adatait</div>
              </div>
              <div className="sm:w-2/3">
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Teljes név</span>
                  <input
                    type="text"
                    className="px-2 py-2 bg-gray-200 w-full rounded shadow"
                    name="name"
                    required=""
                    value=""
                  />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Születési idõ</span>
                  <input
                    type="text"
                    className="px-2 py-2 bg-gray-200 w-full rounded shadow flatpickr-input"
                    name="birthDate"
                    value=""
                    readOnly="readonly"
                  />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Lakhely</span>
                  <input type="text" className="px-2 py-2 bg-gray-200 w-full rounded shadow" name="address" value="" />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Telefonszám</span>
                  <input
                    type="text"
                    className="px-2 py-2 bg-gray-200 w-full rounded shadow"
                    name="phoneNumber"
                    value=""
                  />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">E-mail</span>
                  <input type="text" className="px-2 py-2 bg-gray-200 w-full rounded shadow" name="email" value="" />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Neme</span>
                  <input type="text" className="px-2 py-2 bg-gray-200 w-full rounded shadow" name="gender" value="" />
                </label>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col pb-8">
              <div className="sm:w-1/3 text-sm pr-4">
                <div className="font-semibold py-2">Tagsági adatok</div>
                <div className="text-gray-600">Itt adhatja meg a tagsági nyilvántartáshoz szükséges adatokat.</div>
              </div>
              <div className="sm:w-2/3">
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Alapszervezet</span>
                  <input
                    type="text"
                    className="px-2 py-2 bg-gray-200 w-full rounded shadow"
                    name="organization"
                    value=""
                  />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Regisztráció dátuma</span>
                  <input
                    type="text"
                    className="px-2 py-2 bg-gray-200 w-full rounded shadow flatpickr-input"
                    name="registrationDate"
                    required=""
                    value=""
                    readOnly="readonly"
                  />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Tagsági kategória</span>
                  <input
                    type="text"
                    className="px-2 py-2 bg-gray-200 w-full rounded shadow"
                    name="memberCategory"
                    value=""
                  />
                </label>
                <label className="mb-4">
                  <span className="text-sm px-1 py-2 inline-block font-semibold">Tagsági állapot</span>
                  <input type="text" className="px-2 py-2 bg-gray-200 w-full rounded shadow" name="status" value="" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
