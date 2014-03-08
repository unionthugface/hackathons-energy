using System;
using System.Data;
using System.Data.SqlClient;

namespace EnergyHack.Interfaces
{
    public interface IDao
    {
        void ExecuteCmd(
            Func<SqlConnection> dataSouce,
            string storedProc,
             Action<IDataReader, short> map,
            Action<SqlParameterCollection> inputParamMapper = null,
            Action<SqlParameterCollection> returnParameters = null,
            Action<SqlCommand> cmdModifier = null);


        int ExecuteNonQuery(Func<System.Data.SqlClient.SqlConnection> dataSouce, string storedProc, Action<System.Data.SqlClient.SqlParameterCollection> inputParamMapper, Action<System.Data.SqlClient.SqlParameterCollection> returnParameters = null);
 
    }
}